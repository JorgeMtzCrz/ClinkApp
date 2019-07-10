const Restaurant = require("../models/Restaurant");
const Drink = require("../models/Drink");

exports.getPreguntas = (req, res, next) => {
  console.log("Este es el body de preguntas" + req.body);
  res.render("preguntas");
};

exports.postPreguntas = async (req, res, next) => {
  const { averagePrice } = req.body;
  console.log(req.body.averagePrice);
  const restaurants = await Restaurant.find({
    $and: [{ averagePrice: { $eq: `${averagePrice}` } }]
  }).then(restaurants => {
    res.render("resultados", { restaurants });
  });
};
