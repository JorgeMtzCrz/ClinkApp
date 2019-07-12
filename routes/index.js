const express = require("express");
const router = express.Router();
const {
    getPreguntas,
    postPreguntas,
    getHome,
    getAbout,
    getDrinkCard,
    postPreguntasFiesta,
    postPreguntasComida
} = require("../controllers/indexControllers");
/* GET home page */
router.get("/", getHome, (req, res, next) => {
    res.render("index");
});

router.get("/about", getAbout);
router.get("/preguntas", getPreguntas);
router.post("/preguntas", postPreguntas)
router.post("/preguntasfiesta", postPreguntasFiesta)
router.post("/preguntascomida", postPreguntasComida)
router.get("/detalles/:id", getDrinkCard);
router.get('/detalles', getDrinkCard, postPreguntas)

module.exports = router;