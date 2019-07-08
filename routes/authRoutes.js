const express = require("express");
const passport2 = require("passport");
const router = express.Router();
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

module.exports = router;
