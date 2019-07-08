const { model, Schema } = require("mongoose");
const plm = require("passport-local-mongoose");

const drinkSchema = new Schema(
  {
    name: String,
    price: Number,
    description: String,
    restaurantId: {
<<<<<<< HEAD
      type: Schema.Types.ObjectId,
      ref: "Restaurant"
=======
        type: Schema.Types.ObjectId,
        ref: "Restaurant"
>>>>>>> 622092f94645efb18bbd2c3ec41b53ca44601cc6
    },
    imgPath: String,
    imgName: String
  },
  {
    timestamps: true,
    versionKey: false
<<<<<<< HEAD
  }
);
=======
})

module.exports = model('Drink', drinkSchema)
>>>>>>> 622092f94645efb18bbd2c3ec41b53ca44601cc6
