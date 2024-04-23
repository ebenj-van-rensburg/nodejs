"use strict";

exports.logRequestPaths = (req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
};

exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};

exports.respondWithName = (req, res) => {
  // Assign a local variable to a request parameter.
  let paramsName = req.params.myName;
  // Pass a local variable to a rendered view.
  res.render("index", { name: paramsName });
};

// exports.respondWithName = (req, res) => {
//   res.render("index");
// };
