const BlogPost = require('../models/BlogPost.js');
const path = require('path');

module.exports = {
  getPost: async (req, res) => {
    const blogpost = await BlogPost.findById(req.params.id).populate('userid');
    console.log(blogpost);
    res.render('post', {
      blogpost: blogpost
    });
  },
  newPost: (req, res) => {
    if (req.session.userId) {
        return res.render('create', {
            createPost: true
        });
    }
    res.redirect('/auth/login');
},
  storePost: async (req, res) => {
    const image = req.files.image;
    image.mv(path.resolve(__dirname, '../public/img', image.name), async (error) => {
      await BlogPost.create({
        ...req.body,
        image: '/img/' + image.name,
        userid: req.session.userId
      })
      res.redirect('/');
    })
  }
}