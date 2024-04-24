const User = require('../models/User.js');
const path = require('path');

module.exports = {
    newUser: (req, res) => {
        res.render('register');
    },
    storeUser: (req, res) => {
        User.create(req.body, (error, user) => {
            console.log(error);
            if (error) {
                return res.redirect('/auth/register');
            };
            res.redirect('/');
        })
    },
    loginPage: (req, res) =>{ 
        res.render('login') 
    },
    logout: {
        
    }
};