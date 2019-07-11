const Restaurant = require("../models/Restaurant");
const Drink = require("../models/Drink");

exports.getPreguntas = async (req, res, next) => {
  const drinks = await Drink.find();
  const restaurant = await Restaurant.find().populate("drinks");
  console.log(restaurant);
  res.render("preguntas", {
    restaurant,
    drinks
  });
  // res.render("preguntas");
};

exports.postPreguntas = async (req, res, next) => {
  const { averagePrice, giro, alcohol, typeDrink } = req.body;

  const restaurant = await Restaurant.aggregate([
    {
      $match: {
        giro,
        averagePrice
      }
    },
    {
      $lookup: {
        from: "drinks",
        let: {
          alcool: "alcohol",
          typooo: "typeDrink"
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  {
                    $eq: [alcohol, "$$alcool"]
                  },
                  {
                    $eq: [typeDrink, "$$typooo"]
                  }
                ]
              }
            }
          }
        ],
        as: "bebidas"
      }
    }
  ]);

  console.log(restaurant);
  res.render("resultados", {
    restaurant
  });
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
