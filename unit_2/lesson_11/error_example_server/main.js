"use strict";

const express = require("express"),
  app = express(),
  errorController = require("./controllers/errorController"),
  homeController = require("./controllers/homeController"),
  // import ejs layouts
  layouts = require("express-ejs-layouts");

// set the port
app.set("port", process.env.PORT || 3000);
// set Express.js as the view
app.set("view engine", "ejs");

app.use(express.static("public"));

// calling the layout through app (the set variable name for express)
app.use(layouts);

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.use(homeController.logRequestPaths);

app.get("/name/:myName", homeController.respondWithName);
app.get("/items/:vegetable", homeController.sendReqParam);

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
