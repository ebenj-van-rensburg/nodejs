const express = require("express"),
    app = express(),
    ejs = require("ejs"),
    path = require("path");

app.set("view engine", "ejs")

app.use(express.static("public"))

app.listen(4000, () => {
    console.log("Listening on port: 4000")
});

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/post", (req, res) => {
    res.render("post");
});