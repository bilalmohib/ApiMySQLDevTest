"use strict";
var dbConn = require("./../../config/db.config");
//Quiz object create
var Quiz = function (quiz) {
  this.title = quiz.title;
  this.description = quiz.description;
  this.quizQuestions = quiz.quizQuestions;
  this.isActivated = quiz.isActivated;
  this.created_at = new Date();
  this.updated_at = new Date();
};
Quiz.create = function (newEmp, result) {
  dbConn.query("INSERT INTO quiz set ?", newEmp, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Quiz.findById = function (id, result) {
  dbConn.query(
    "Select * from quiz where id = ? ",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
Quiz.findAll = function (result) {
  dbConn.query("Select * from quiz", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("quizs : ", res);
      result(null, res);
    }
  });
};
Quiz.update = function (id, quiz, result) {
  dbConn.query(
    "UPDATE quiz SET title=?,description=?,quizQuestions=?,isActivated=?,created_at=?,updated_at=? WHERE id = ?",
    [
      quiz.title,
      quiz.description,
      quiz.quizQuestions,
      quiz.isActivated,
      quiz.created_at,
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
