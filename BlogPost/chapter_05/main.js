const express = require("express"),
    app = express(),
    router = express.Router(),
    mongoose = require("mongoose"),
    ejs = require("ejs"),
    path = require("path");

mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://localhost:27017/my_database",
  { useNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);

const db = mongoose.connection;

// successful DB connection
db.once("open", () => {
  console.log("Mongoose: MongoDB connection successful");
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs")

router.use(express.static("public"));
router.use(
  express.urlencoded({
    extended: false
  })
);

router.use(express.json());

// routing
router.get("/", (req, res) => {
    res.render("index");
});

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/contact", (req, res) => {
    res.render("contact");
});

router.get("/post", (req, res) => {
    res.render("post");
});
// routing

app.use("/", router);

app.listen(app.get("port"), () => {
    console.log("Listening on port: 3000")
});