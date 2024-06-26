const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title']
      },
    subheading: String,
    body: {
        type: String,
        required: [true, 'Please fill in the body']
      },
    username: {
        type: String,
        default: '{AnonUser}'
    },
    datePosted: {
        /* Can declare property type with an object like this because we need 'default' */
        type: Date,
        default: new Date()
    },
    image: String
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPost;