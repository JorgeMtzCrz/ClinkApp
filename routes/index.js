const express = require("express");
const router = express.Router();
const {
    getPreguntas,
    postPreguntas,
    getHome,
    getAbout,
    getDrinkCard
} = require("../controllers/indexControllers");
/* GET home page */
router.get("/", getHome, (req, res, next) => {
    res.render("index");
});

router.get("/about", getAbout);
router.get("/preguntas", getPreguntas);
router.post("/preguntas", postPreguntas)
router.get("/detalles/:id", getDrinkCard);
router.get('/detalles', getDrinkCard, postPreguntas)

module.exports = router;