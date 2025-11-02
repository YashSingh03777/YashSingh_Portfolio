import express from "express";
import Question from "../models/Question.js";
const router = express.Router();

// POST /api/questions → visitor asks question
router.post("/", async (req, res) => {
  try {
    const { name, question } = req.body;
    if (!name || !question) {
      return res.status(400).json({ error: "Name and question required" });
    }
    const newQ = new Question({ name, question });
    await newQ.save();
    res.json({ success: true, msg: "Question submitted!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/questions → show all questions (public)
router.get("/", async (req, res) => {
  try {
    const allQ = await Question.find().sort({ createdAt: -1 });
    res.json(allQ);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/questions/reply/:id → admin replies to question
router.put("/reply/:id", async (req, res) => {
  try {
    const { answer } = req.body;
    const updated = await Question.findByIdAndUpdate(
      req.params.id,
      { answer },
      { new: true }
    );
    res.json({ success: true, msg: "Reply added!", updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
