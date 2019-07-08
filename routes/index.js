<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const passport = require('../config/passport')

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});

module.exports = router;
=======
const express = require("express");
const router = express.Router();
const {} = require();
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/fiesta");
router.get("/cocktail");
router.get("/acomp");
router.get("/fiesta-last");
router.get("/cocktail-last");
router.get("/acomp-last");

module.exports = router;
>>>>>>> f2ba5fa2f4098ab8336b850668fa4e925037a608
