const express = require("express");
const router = express.Router();
const {
    getPreguntas,
    postPreguntas,
    getHome,
    getAbout
} = require("../controllers/indexControllers");
/* GET home page */
router.get("/", getHome, (req, res, next) => {
    res.render("index");
});

router.get("/about", getAbout);
router.get("/preguntas", getPreguntas);
router.post("/preguntas", postPreguntas);

module.exports = router;