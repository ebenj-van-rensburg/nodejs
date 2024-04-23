const mongoose = require('mongoose'),
    BlogPostSchema = new mongoose.Schema({
    title: String,
    body: String
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPost;