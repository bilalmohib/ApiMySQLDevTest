"use strict";
var dbConn = require("./../../config/db.config");
//Quiz object create
var Quiz = function (quiz) {
  this.first_name = quiz.first_name;
  this.last_name = quiz.last_name;
  this.email = quiz.email;
  this.phone = quiz.phone;
  this.organization = quiz.organization;
  this.designation = quiz.designation;
  this.salary = quiz.salary;
  this.status = quiz.status ? quiz.status : 1;
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
    "UPDATE quiz SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?",
    [
      quiz.first_name,
      quiz.last_name,
      quiz.email,
      quiz.phone,
      quiz.organization,
      quiz.designation,
      quiz.salary,
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
