const BlogPost = require('../models/BlogPost.js');

module.exports = {
    index: async (req, res) => {
        const blogposts = await BlogPost.find({});
        res.render('index', {
            blogposts: blogposts
        });
    },
    about: (req, res) => {
        res.render('about');
    },
    contact: (req, res) => {
        res.render('contact');
    }
}