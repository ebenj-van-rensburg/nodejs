const User = require('../models/User')

module.exports = {
    middlewareRun: (req, res, next) => {
        console.log('Custom middleware called')
        next()
    },
    validate: (req, res, next) => {
        if (req.files == null || req.body.title.trim() == '' || req.body.body.trim() == '') {
            return res.redirect('/');
        }
        next();
    },
    auth: (req, res, next) => {
        User.findById(req.session.userId, (error, user) => {
            if (error || !user) {
                return res.redirect('/');
            }
            next();
        });
    },
    authRedirect: (req, res, next) => {
        if (req.session.userId) {
            return res.redirect('/');
        }
        next();
    }
};