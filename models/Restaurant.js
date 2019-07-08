const { model, Schema } = require("mongoose");

const restaurantSchema = new Schema(
  {
    name: String,
    giro: {
      type: String,
      require,
      enum: ["Restaurant", "Bar", "Antro", "Cantina"],
      default: "Restaurant"
    },
    averagePrice: Number,
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    imgPath: String,
    imgName: String,
    calification: [String]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("User", UserSchema);
