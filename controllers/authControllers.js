const User = require('../models/User')
const Restaurant = require('../models/Restaurant')
const Drink = require('../models/Drink')

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
    const n = {
        ...location,
        coordinates: [Number(location.coordinates[0]), Number(location.coordinates[1])]
    }
    const {
        url: imgPath,
        originalname: imgName
    } = req.file
    const id = req.user._id
    Restaurant.create({
            name,
            giro,
            averagePrice,
            n,
            imgPath,
            imgName,
            creatorId: id,
        })
        .then(restaurant => res.redirect(`perfil`))
        .catch(err => next(err))
}
exports.getOneRest = async(req, res, next) => {
    Restaurant.findById(req.params.id)
        .then(restaurant => res.render('auth/restaurant', restaurant))
        .catch(err => next(err))
}
exports.getDrinks = (req, res) => {
    Restaurant.findById(req.params.id)
        .then(restaurant => res.render(`auth/altadrink`, restaurant))

}
exports.postDrink = (req, res, next) => {
    const {
        name,
        alcohol,
        typeDrink,
        description
    } = req.body
    const {
        url: imgPath,
        originalname: imgName
    } = req.file

    Drink.create({
            name,
            alcohol,
            typeDrink,
            description,
            imgPath,
            imgName
        })
        .then(drink => res.redirect(`perfil`))
        .catch(err => next(err))
}

exports.logout = (req, res) => {
    req.logout()
    res.redirect('/')
}

exports.getProfile = async(req, res, next) => {
    const id = req.user._id
    const restaurants = await Restaurant.find({
            $and: [{
                "creatorId": {
                    $eq: id
                }
            }]

        })
        .then(restaurants => {
            res.render(`auth/perfil`, {
                restaurants
            })
        })

}