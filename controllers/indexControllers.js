const Restaurant = require("../models/Restaurant");

exports.getPreguntas = (req, res, next) => {
  res.render("preguntas");
};

exports.postPreguntas = (req, res, next) => {
  const { averagePrice, giro, alcohol, typeDrink } = req.body;
  console.log(req.body);
  Restaurant.find({
    $and: [
      { averagePrice: { $eq: `${averagePrice}` } },
      { giro: { $eq: `${giro}` } }
    ]
  })
    .populate({
      path: "drinks",
      match: {
        $and: [
          { alcohol: { $eq: `${alcohol}` } },
          { typeDrink: { $eq: `${typeDrink}` } }
        ]
      }
    })
    .then(restaurants => {
      console.log(restaurants);
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
