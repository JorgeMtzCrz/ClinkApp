const User = require('../models/User')
const Restaurant = require('../models/Restaurant')

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

exports.getLogin = (req, res) => {
    res.render('auth/login')
}
exports.postLogin = (req, res) => {
    res.redirect('perfil')
}

exports.getRestaurant = (req, res) => {
    res.render('auth/altaRes')
}
exports.getProfile = (req, res) => {
    res.render('auth/perfil')
}
exports.postRestaurant = (req, res, next) => {
    Restaurant.register({
        ...req.body,
    })
}