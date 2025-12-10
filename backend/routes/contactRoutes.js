import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// POST /api/contact  -> user sends message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields (name, email, message) are required" });
    }

    const newMessage = await Message.create({ name, email, message });

    return res.status(201).json({
      success: true,
      msg: "Message sent successfully!",
      data: newMessage,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// GET /api/contact  -> admin: list messages (paginated + optional filter)
router.get("/", /* optional: requireAdmin, */ async (req, res) => {
  try {
    const { page = 1, limit = 20, email } = req.query;

    const filter = {};
    if (email) filter.email = email;

    const skip = (Number(page) - 1) * Number(limit);

    const [messages, total] = await Promise.all([
      Message.find(filter).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)).lean(),
      Message.countDocuments(filter),
    ]);

    return res.json({
      success: true,
      data: messages,
      meta: { total, page: Number(page), limit: Number(limit), pages: Math.ceil(total / Number(limit)) },
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

export default router;
