const User = require('../models/User')
const Restaurant = require('../models/Restaurant')

const passport = require('../config/passport')

exports.getSignup = (req, res) => {
    res.render('auth/signup')
}
exports.postSignup = async(req, res, next) => {
    const {
        email,
        password
    } = req.body
    const username = await User.findOne({
        email
    })
    if (username === '' || password === '') {
        return res.render('auth/signup', {
            message: 'email of password empty'
        })
    }
    if (username !== null) {
        return res.render('auth/signup', {
            message: 'the username already exists'
        })
    }
    await User.register({
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
exports.postLogin = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return res.send(info)
        req.login(user, err => {
            if (err) return res.send('Fallo', err)
            req.app.locals.user = user
            if (user.role === 'admin') return res.redirect('/admin')
            else return res.redirect('perfil')
        })
    })(req, res, next)
}

exports.getRestaurant = (req, res) => {
    console.log(req.app.locals._id)
    res.render('auth/altares')
}

exports.postRestaurant = (req, res, next) => {

    const {
        name,
        giro,
        averagePrice,
        lat,
        lng
    } = req.body
    const location = {
        coordinates: [lat, lng]
    }

    console.log(req.body)
    const n = {
        ...location,
        coordinates: [Number(location.coordinates[0]), Number(location.coordinates[1])]
    }
    const {
        url: imgPath,
        originalname: imgName
    } = req.file
    Restaurant.create({
            name,
            giro,
            averagePrice,
            n,
            imgPath,
            imgName
        })
        .then(restaurant => res.redirect(`perfil`))
        .catch(err => next(err))
        // req.app.locals._id = id
        // console.log(id)
        // Restaurant.register({
        //     ...req.body,
        // })
        // passport.authenticate('local', (err, user, info) => {
        //     if (err) return res.send(info)
        //     req.login(user, err => {
        //         if (err) return res.send('Fallo', err)
        //         req.app.locals.user = user
        //         console.log(user)
        //         if (user.role === 'admin') return res.redirect('/admin')
        //         else return res.redirect('perfil')
        //     })
        // })(req, res, next)
}

exports.logout = (req, res) => {
    req.logout()
    res.redirect('/')
}

exports.getProfile = (req, res) => {

    res.render(`auth/perfil`)
}