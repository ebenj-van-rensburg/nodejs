"use strict";

var courses = [
  {
    title: "Event Driven Cakes",
    cost: 50
  },
  {
    title: "Asynchronous Artichoke",
    cost: 25
  },
  {
    title: "Object Oriented Orange Juice",
    cost: 10
  }
];

exports.showCourses = (req, res) => {
  res.render("courses", {
    offeredCourses: courses
  });
};

exports.index = (req, res) => {
  res.render("index");
};

exports.showSignUp = (req, res) => {
  res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
  res.render("thanks");
};


exports.logRequestPaths = (req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
};