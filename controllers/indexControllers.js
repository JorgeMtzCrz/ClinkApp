const Restaurant = require("../models/Restaurant");
const Drink = require("../models/Drink");

// exports.getPreguntas = async (req, res, next) => {
//   const drinks = await Drink.find();
//   const restaurant = await Restaurant.find().populate("drinks");
//   console.log(restaurant);
//   res.render("preguntas", {
//     restaurant,
//     drinks
//   });
//   // res.render("preguntas");
// };

// exports.postPreguntas = async (req, res, next) => {
//   const { averagePrice, giro, alcohol, typeDrink } = req.body;

//   const restaurant = await Restaurant.aggregate([
//     {
//       $match: {
//         giro,
//         averagePrice
//       }
//     },
//     {
//       $lookup: {
//         from: "drinks",
//         let: {
//           alcool: "alcohol",
//           typooo: "typeDrink"
//         },
//         pipeline: [
//           {
//             $match: {
//               $expr: {
//                 $and: [
//                   {
//                     $eq: [alcohol, "$$alcool"]
//                   },
//                   {
//                     $eq: [typeDrink, "$$typooo"]
//                   }
//                 ]
//               }
//             }
//           }
//         ],
//         as: "bebidas"
//       }
//     }
//   ]);

//   console.log(restaurant);
//   res.render("resultados", {
//     restaurant
//   });
exports.getPreguntas = async(req, res, next) => {
    const drinks = await Drink.find();
    const restaurant = await Restaurant.find().populate("drinks");

    res.render("preguntas", {
        restaurant,
        drinks
    });
    // res.render("preguntas");
};

exports.postPreguntas = async(req, res, next) => {
    let id;
    const {
        averagePrice,
        giro,
        alcohol,
        typeDrink
    } = req.body;

    const restaurants = await Restaurant.aggregate([{
            $lookup: {
                from: "drinks",
                localField: "drinks",
                foreignField: "_id",
                as: "drinks"
            }
        },
        {
            $match: {
                giro,
                "drinks.0": {
                    $exists: true
                },
                "drinks.alcohol": alcohol,
                "drinks.typeDrink": typeDrink,
                averagePrice
            }
        }
    ]);
    for (i = 0; i <= restaurants.length - 1; i++) {
        console.log("Aqui van las bebidas<<<<<", restaurants[i]._id[i]);
        const id2 = restaurants[i]._id[i];
        let id = id2;
    }

    res.render(`resultados`, {
        restaurants,
        id
    });
};

exports.postPreguntasFiesta = async(req, res, next) => {
    const {
        averagePrice,
        giro,
    } = req.body;

    const restaurants = await Restaurant.find()
    console.log('Aqui van los restaurants', restaurants)
    res.render(`resultados`, {
        restaurants
    })
}

exports.postPreguntasComida = async(req, res, next) => {
    let id;
    const {
        averagePrice,
        giro,
        alcohol,
    } = req.body;

    const restaurants = await Restaurant.aggregate([{
            $lookup: {
                from: "drinks",
                localField: "drinks",
                foreignField: "_id",
                as: "drinks"
            }
        },
        {
            $match: {
                giro,
                "drinks.0": {
                    $exists: true
                },
                "drinks.alcohol": alcohol,
                averagePrice
            }
        }
    ]);
    for (i = 0; i <= restaurants.length - 1; i++) {
        console.log("Aqui van las bebidas<<<<<", restaurants[i]._id[i]);
        const id2 = restaurants[i]._id[i];
        let id = id2;
    }

    res.render(`resultados`, {
        restaurants,
        id
    });
};

exports.getHome = (req, res, next) => {
    res.redirect("/preguntas");
};

exports.getAbout = (req, res, next) => {
    res.render("about");
};

exports.getDrinkCard = async(req, res, next) => {
    const restaurant = await Restaurant.findById(req.params.id).populate(
        "drinks"
    );
    res.render("detalles", restaurant);
};

exports.getRestCard = (req, res, next) => {
    res.render("partials/restaurantCard");
};