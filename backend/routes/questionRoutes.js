import express from "express";
import Question from "../models/Question.js";

const router = express.Router();

// POST /api/questions → visitor asks question
router.post("/", async (req, res) => {
  try {
    const { name, question } = req.body;

    if (!name?.trim() || !question?.trim()) {
      return res.status(400).json({ error: "Name and question are required" });
    }

    const newQuestion = await Question.create({ name, question });

    return res.status(201).json({
      success: true,
      msg: "Question submitted!",
      data: newQuestion
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// GET /api/questions → show all questions (public)
router.get("/", async (req, res) => {
  try {
    const allQuestions = await Question.find()
      .sort({ createdAt: -1 })
      .lean();

    return res.json({
      success: true,
      count: allQuestions.length,
      data: allQuestions
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// PUT /api/questions/reply/:id → admin replies to a question
router.put("/reply/:id", /* optional: adminAuth, */ async (req, res) => {
  try {
    const { answer } = req.body;

    if (!answer?.trim()) {
      return res.status(400).json({ error: "Answer is required" });
    }

    const updated = await Question.findByIdAndUpdate(
      req.params.id,
      { answer },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Question not found" });
    }

    return res.json({
      success: true,
      msg: "Reply added!",
      data: updated
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

export default router;
