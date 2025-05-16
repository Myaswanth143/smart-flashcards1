// routes/flashcards.js

const express = require("express");
const router = express.Router();
const Flashcard = require("../models/Flashcard");
const classifySubject = require("../utils/subjectClassifier");

// Task 1: Add Flashcard with Subject Inference
router.post("/flashcard", async (req, res) => {
  const { student_id, question, answer } = req.body;
  const subject = classifySubject(question);
  try {
    const flashcard = new Flashcard({ student_id, question, answer, subject });
    await flashcard.save();
    res.json({ message: "Flashcard added successfully", subject });
  } catch (err) {
    res.status(500).json({ error: "Failed to add flashcard" });
  }
});

// Task 2: Get Flashcards by Mixed Subjects
router.get("/get-subject", async (req, res) => {
  const { student_id, limit = 5 } = req.query;
  try {
    const flashcards = await Flashcard.aggregate([
      { $match: { student_id } },
      { $sample: { size: parseInt(limit) } },
    ]);
    res.json(flashcards);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve flashcards" });
  }
});

module.exports = router;
