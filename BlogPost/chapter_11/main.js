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
  expressSession = require('express-session'),
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

router.use(expressSession({
  resave: true,
  saveUninitialized: true,
  secret: 'keyboard cat'
}));

global.loggedIn = null;

router.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next();
});

// routing
router.get('/', homeController.index);
router.get('/about', homeController.about);
router.get('/contact', homeController.contact);

router.get('/auth/register', middleWare.authRedirect, usersController.newUser);
router.post('/users/register', middleWare.authRedirect, usersController.storeUser);
router.get('/auth/login', middleWare.authRedirect, usersController.loginPage);

router.post('/users/login', middleWare.authRedirect, loginController.login);
router.get('/auth/logout', loginController.logout);

router.get('/post/:id', postController.getPost);
router.get('/create', middleWare.auth, postController.newPost);
router.post('/posts/store', middleWare.auth, postController.storePost);

router.use((req, res) => res.render('404'));
// routing

app.use("/", router);

app.listen(app.get("port"), () => {
  console.log("Listening on port: 3000")
});