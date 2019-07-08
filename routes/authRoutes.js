const express = require("express");
const passport2 = require("passport");
const router = express.Router();
const passport = require('../config/passport')
const {
    postSignup,
    getSignup
} = require('../controllers/authControllers');
router.get("/signup", getSignup);
router.post("/signup", postSignup);
router.get("/login");
router.post("/login");
router.get("/logout");
router.get("/profile");

module.exports = router