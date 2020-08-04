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
    postRestaurant,
    getDrinks,
    postDrink,
    getOneRest,
    getDeleteDrink,
    getDeleteRest,
    getEditRest,
    postEditRest
} = require('../controllers/authControllers')
const {
    isLoggedIn,
    isAuth,
    isAdmin,
    checkLoggedUser
} = require('../middlewares/auth')


router.get("/signup", getSignup);
router.post("/signup", postSignup);
router.get("/login", isLoggedIn, getLogin);
router.post("/login", passport.authenticate("local"), postLogin);
router.get("/logout", logout);
router.get(`/perfil`, isAuth, getProfile);
router.get("/altares", isAuth, getRestaurant)
router.post("/altares", isAuth, uploadCloud.single('photo'), postRestaurant)
router.get("/restaurant/:id", isAuth, getOneRest)
router.get("/drinks", isAuth, isAdmin, getDrinks)
router.post("/drinks", isAuth, isAdmin, uploadCloud.single('photo'), postDrink)
router.get('/restaurant/:restaurantID/delete', getDeleteRest)
router.get('/restaurant/:restaurantID/drinks/:drinkID/delete', getDeleteDrink)
router.get('/restaurant/:restaurantID/edit', getEditRest)
router.post('/restaurant/:restaurantID/edit', postEditRest)


module.exports = router;