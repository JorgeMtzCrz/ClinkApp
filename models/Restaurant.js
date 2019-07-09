const { model, Schema } = require("mongoose");

const restaurantSchema = new Schema(
  {
    name: String,
    giro: {

      type: String,
      enum: ["Restaurant", "Bar", "Antro", "Cantina"],
      default: "Restaurant"
    },
    location: {
      addres: {
        type: String,
        default: "Point"
      },
      coordinates: [Number]
    },
    averagePrice: Number,
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    imgPath: String,
    imgName: String,
    calification: [Number]
  },
  {

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
}, 
{

    timestamps: true,
    versionKey: false
  }


module.exports = model("Restaurant", restaurantSchema);
