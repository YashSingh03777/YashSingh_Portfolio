import express from "express";
import Message from "../models/Message.js";
const router = express.Router();

// POST /api/contact → user sends message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields required" });
    }
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.json({ success: true, msg: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/contact/all → admin gets all messages
router.get("/all", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
