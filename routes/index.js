const express = require("express");
const router = express.Router();
const { getPreguntas, getResults } = require("../controllers/indexControllers");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/preguntas", getPreguntas);
router.get("/resultados", getResults);
// router.get("/cocktail");
// router.get("/acomp");
// router.get("/fiesta-last");
// router.get("/cocktail-last");
// router.get("/acomp-last");

module.exports = router;
