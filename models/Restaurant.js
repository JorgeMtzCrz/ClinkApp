const { model, Schema } = require("mongoose");

const restaurantSchema = new Schema(
  {
    name: String,
    giro: {
<<<<<<< HEAD
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
=======
        type: String,
        require,
        enum: ['restaurant', 'Bar', 'Antro', 'Cantina'],
        default: 'restaurant'
    },
    averagePrice: Number,
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    imgPath: String,
    imgName: String,
    calification: String,
}, {
>>>>>>> 622092f94645efb18bbd2c3ec41b53ca44601cc6
    timestamps: true,
    versionKey: false
  }
);

<<<<<<< HEAD
module.exports = model("User", UserSchema);
=======
module.exports = model('Restaurant', restaurantSchema)
>>>>>>> 622092f94645efb18bbd2c3ec41b53ca44601cc6
