const express = require("express");
const router = express.Router();
// const {} = require();
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