"use strict";
const Quiz = require("../models/quiz.model");
exports.findAll = function (req, res) {
  Quiz.findAll(function (err, quiz) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", quiz);
    res.send(quiz);
  });
};
exports.create = function (req, res) {
  const new_question = new Quiz(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field to submit Quiz" });
  } else {
    Quiz.create(new_question, function (err, quiz) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Quiz added successfully!",
        data: quiz,
      });
    });
  }
};
exports.findById = function (req, res) {
  Quiz.findById(req.params.id, function (err, quiz) {
    if (err) res.send(err);
    res.json(quiz);
  });
};
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required fields to submit Quiz" });
  } else {
    Quiz.update(
      req.params.id,
      new Quiz(req.body),
      function (err, quiz) {
        if (err) res.send(err);
        res.json({ error: false, message: "Quiz successfully updated" });
      }
    );
  }
};
exports.delete = function (req, res) {
  Quiz.delete(req.params.id, function (err, quiz) {
    if (err) res.send(err);
    res.json({ error: false, message: "Quiz successfully deleted" });
  });
};
