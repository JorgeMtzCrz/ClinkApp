const express = require("express");
const passport2 = require("passport");
const router = express.Router();
<<<<<<< HEAD
const {
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
=======
const passport = require("../config/passport");
const { postSignup, getSignup } = require("../controllers/authControllers");
router.get("/signup", getSignup);
router.post("/signup", postSignup);
router.get("/login");
router.post("/login");
router.get("/logout");
router.get("/profile");
>>>>>>> 9893df45cd639d875a8db637e9f145120448f3b1

module.exports = router;
