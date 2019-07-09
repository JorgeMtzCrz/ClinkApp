const express = require("express");
const passport2 = require("passport");
const router = express.Router();
const {
<<<<<<< HEAD
=======
<<<<<<< HEAD
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

>>>>>>> d0f2db1cf7cfa59023ec15b51460a038719d4328

  postSignup,
  getSignup,
  getRestaurant,
  getLogin,
  postLogin,
  getProfile
} = require("../controllers/authControllers");
router.get("/signup", getSignup);
router.post("/signup", postSignup);
router.get("/altaRes", getRestaurant);
router.get("/login", getLogin);
router.post("/login", passport.authenticate("local"), postLogin);
router.get("/logout");
router.get("/perfil", getProfile);

const passport = require("../config/passport");
const { postSignup, getSignup } = require("../controllers/authControllers");
router.get("/signup", getSignup);
router.post("/signup", postSignup);
router.get("/login");
router.post("/login");
router.get("/logout");
router.get("/profile");
<<<<<<< HEAD

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

=======
>>>>>>> 9893df45cd639d875a8db637e9f145120448f3b1
>>>>>>> b26354db97e075d05ecce57714a51ed941158bc9
>>>>>>> d0f2db1cf7cfa59023ec15b51460a038719d4328

module.exports = router;
