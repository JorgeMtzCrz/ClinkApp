const express = require("express");
const passport2 = require("passport");
const router = express.Router();
const passport = require('../config/passport')
const uploadCloud = require('../config/cloudinary')

const {

    postSignup,
    getSignup,
    getRestaurant,
    getLogin,
    postLogin,
    getProfile,
    logout,
    postRestaurant
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
router.post("/altares", isAuth, uploadCloud.single('photo'), postRestaurant)




module.exports = router;