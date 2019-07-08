const User = require('../models/User')

exports.getSignup = (req, res) => {
    res.render('auth/signup')
}
exports.postSignup = (req, res, next) => {
    User.register({
            ...req.body,
            role: 'user'
        }, req.body.password)
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.send(err)
        })
}