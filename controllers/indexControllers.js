const Restaurant = require("../models/Restaurant");
const Drink = require("../models/Drink");

exports.getPreguntas = (req, res, next) => {
  console.log("Este es el body de preguntas" + req.body);
  res.render("preguntas");
};

exports.postPreguntas = async (req, res, next) => {
  const { averagePrice, giro, drink, typeDrink } = req.body;

  Restaurant.find({
    $and: [
      { averagePrice: { $eq: `${averagePrice}` } },
      { giro: { $eq: `${giro}` } },
      { drink: { $eq: `${drink}` } },
      { typeDrink: { $eq: `${typeDrink}` } }
    ]
  })
    .then(restaurants => {
      res.render("resultados", { restaurants });
    })
    .catch(err => next(err));
};
exports.getHome = (req, res, next) => {
  res.redirect("/preguntas");
};

exports.getAbout = (req, res, next) => {
  res.render("about");
};
