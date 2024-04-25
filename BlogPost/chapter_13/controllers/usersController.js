const User = require('../models/User.js');
const path = require('path');

module.exports = {
    newUser: (req, res) =>{ 
        var username = "" 
        var password = ""
        const data = req.flash('data')[0];    
    
        if(typeof data != "undefined"){        
            username = data.username
            password = data.password
        }
         
        res.render('register',{        
            errors: req.flash('validationErrors'),
            username: username,
            password: password
        })
    },
    storeUser: (req, res) => {
        User.create(req.body, (error, user) => {
            console.log(error);
            if (error) {
                const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
                req.flash('validationErrors', validationErrors)
                req.flash('data', req.body)
                return res.redirect('/auth/register');
            };
            res.redirect('/');
        })
    },
    loginPage: (req, res) => {
        res.render('login')
    }
};