const { model, Schema } = require("mongoose");
const plm = require("passport-local-mongoose");

const drinkSchema = new Schema(
  {
    name: String,
    price: Number,
    description: String,
    restaurantId: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant"
    },
    alcohol: {
      type: String,
      enum: ["vodka", "cerveza", "tequila", "whisky"]
    },
    imgPath: String,
    imgName: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Drink", drinkSchema);
