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
    imgPath: String,
    imgName: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);
