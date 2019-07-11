const Restaurant = require("../models/Restaurant");

exports.getPreguntas = (req, res, next) => {
  res.render("preguntas");
};

exports.postPreguntas = async (req, res, next) => {
  const { averagePrice, giro, alcohol, typeDrink } = req.body;
  console.log(req.body);
  const restaurant = await Restaurant.find({
    $and: [
      { averagePrice: { $eq: `${averagePrice}` } },
      { giro: { $eq: `${giro}` } }
    ]
  }).populate("drinks");

  console.log(restaurant);
  res.render("resultados", { restaurant });
};
exports.getHome = (req, res, next) => {
  res.redirect("/preguntas");
};

exports.getAbout = (req, res, next) => {
  res.render("about");
};

exports.getDrinkCard = (req, res, next) => {
  res.render("partials/drinkCard");
};

exports.getRestCard = (req, res, next) => {
  res.render("partials/restaurantCard");
};
