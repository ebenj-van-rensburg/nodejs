const express = require("express"),
  path = require('path'),
  app = express(),
  router = express.Router(),
  ejs = require("ejs"),
  mongoose = require("mongoose"),
  BlogPost = require('./models/BlogPost'),
  bodyParser = require('body-parser'),
  fileUpload = require('express-fileupload'),
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

router.use(fileUpload())

// added validation middleware
const myMiddleWare = (req, res, next) => {
  console.log('Custom middleware called')
  next()
};
router.use(myMiddleWare);

const validateMiddleWare = (req,res,next)=>{     
  if(req.files == null || req.body.title == null){         
      return res.redirect('/posts/new') 
  }     
  next() 
} 

router.use('/posts/store', validateMiddleWare);

// routing
router.get('/', async (req, res) => {
  const blogposts = await BlogPost.find({});
  res.render('index', {
    blogposts: blogposts
  });
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/post/:id', async (req, res) => {
  const blogpost = await BlogPost.findById(req.params.id)
  res.render('post', {
    blogpost: blogpost
  });
});

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/posts/store', async (req, res) => {
  const image = req.files.image;
  image.mv(path.resolve(__dirname, '/public/img', image.name), async (error) => {
    await BlogPost.create({
      ...req.body,
      image: '/img/' + image.name
    })
    res.redirect('/');
  })
});
// routing

app.use("/", router);

app.listen(app.get("port"), () => {
  console.log("Listening on port: 3000")
});