const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quiz.controller");
// Retrieve all quiz
router.get("/", quizController.findAll);
// Create a new quiz
router.post("/", quizController.create);
// Retrieve a single quiz with id
router.get("/:id", quizController.findById);
// Update a quiz with id
router.put("/:id", quizController.update);
// Delete a quiz with id
router.delete("/:id", quizController.delete);
module.exports = router;
