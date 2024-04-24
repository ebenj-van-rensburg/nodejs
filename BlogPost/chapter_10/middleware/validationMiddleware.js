module.exports = {
    middlewareRun: (req, res, next) => {
        console.log('Custom middleware called')
        next()
    },
    validate: (req, res, next) => {
        if (req.files == null || req.body.title.trim() == '' || req.body.body.trim() == '') {
            return res.redirect('/');
        }
        next()
    }
}