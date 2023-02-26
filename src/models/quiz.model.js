"use strict";

const dbConn = require("./../../config/db.config");

// Quiz object create
class Quiz {
  constructor(quiz) {
    this.title = quiz.title;
    this.description = quiz.description;
    this.quizQuestions = quiz.quizQuestions;
    this.isActivated = quiz.isActivated;
    this.created_by = quiz.created_by;
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  static create(newQuiz, result) {
    const sql = "INSERT INTO quiz SET ?";
    const quizData = {
      title: newQuiz.title,
      description: newQuiz.description,
      quizQuestions: JSON.stringify(newQuiz.quizQuestions),
      isActivated: newQuiz.isActivated,
      created_by: newQuiz.created_by,
      created_at: newQuiz.created_at,
      updated_at: newQuiz.updated_at,
    };
    dbConn.query(sql, quizData, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    });
  }
}
Quiz.findById = function (id, result) {
  dbConn.query("SELECT * FROM quiz WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Quiz.findAll = function (result) {
  dbConn.query("SELECT * FROM quiz", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("quizs : ", res);
      result(null, res);
    }
  });
};
Quiz.update = function (id, quiz, result) {
  dbConn.query(
    "UPDATE quiz SET title=?, description=?, quizQuestions=?, isActivated=?, created_by=?, updated_at=? WHERE id=?",
    [
      quiz.title,
      quiz.description,
      JSON.stringify(quiz.quizQuestions),
      quiz.isActivated,
      quiz.created_by,
      new Date(),
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Quiz.delete = function (id, result) {
  dbConn.query("DELETE FROM quiz WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = Quiz;
