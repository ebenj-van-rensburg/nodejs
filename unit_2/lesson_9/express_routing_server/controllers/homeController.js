"use strict";

// Create a function to handle route-specific requests.
exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};
