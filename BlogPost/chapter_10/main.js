const express = require("express"),
  path = require('path'),
  app = express(),
  router = express.Router(),
  ejs = require("ejs"),
  mongoose = require("mongoose"),
  BlogPost = require('./models/BlogPost'),
  User = require('./models/User'),
  bodyParser = require('body-parser'),
  fileUpload = require('express-fileupload'),
  homeController = require('./controllers/homeController'),
  postController = require('./controllers/postController'),
  usersController = require('./controllers/usersController'),
  loginController = require('./controllers/loginController'),
  middleWare = require('./middleware/validationMiddleware'),
  db = mongoose.connection;

mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://localhost:27017/my_database",
  { useUnifiedTopology: true, useNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);

const { error } = require('console');

// successful DB connection
db.once("open", () => {
  console.log("Mongoose: MongoDB connection successful");
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs")

router.use(express.static("public"));
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

router.use(bodyParser.json());

router.use(fileUpload());

router.use(middleWare.middlewareRun);
router.use('/posts/store', middleWare.validate);

// routing
router.get('/', homeController.index);
router.get('/about', homeController.about);
router.get('/contact', homeController.contact);

router.get('/auth/register', usersController.newUser);
router.post('/users/register', usersController.storeUser);
router.get('/auth/login', usersController.loginPage);

router.post('/users/login', loginController.login);

router.get('/post/:id', postController.getPost);
router.get('/create', postController.newPost);
router.post('/posts/store', postController.storePost);
// routing

app.use("/", router);

app.listen(app.get("port"), () => {
  console.log("Listening on port: 3000")
});