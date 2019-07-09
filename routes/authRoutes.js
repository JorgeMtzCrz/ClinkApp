const express = require("express");
const passport = require("passport");
const router = express.Router();
const {
    postSignup,
    getSignup,
    getRestaurant,
    getLogin,
    postLogin,
    getProfile,
    logout
} = require('../controllers/authControllers')
const {
    isLoggedIn,
    isAuth
} = require('../middlewares/auth')


router.get("/signup", getSignup);
router.post("/signup", postSignup);
router.get("/login", isLoggedIn, getLogin);
router.post("/login", passport.authenticate('local'), postLogin);
router.get("/logout", logout);
router.get(`/perfil`, isAuth, getProfile);
router.get("/altares", isAuth, getRestaurant)

module.exports = router