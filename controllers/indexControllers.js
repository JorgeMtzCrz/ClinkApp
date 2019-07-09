const Restaurant = require("../models/Restaurant");
const Drink = require("../models/Drink");

exports.getPreguntas = (req, res, next) => {
  res.render("preguntas");
};

exports.getResults = (req, res, next) => {
  Restaurant.find().then(restaurants => {
    res.render("resultados", { restaurants });
  });
};
