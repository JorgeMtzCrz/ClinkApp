const {
    model,
    Schema
} = require("mongoose");


const restaurantSchema = new Schema({
    name: String,
    giro: {
        type: String,
        enum: ["Restaurant", "Bar", "Antro", "Cantina"],
        default: "Restaurant"
    },
    averagePrice: String,
    location: {
        addres: {
            type: String,
            default: "Point"
        },
        coordinates: [Number]
    },
    imgPath: String,
    imgName: String,
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    calification: [Number],
    drinks: [{
        type: Schema.Types.ObjectId,
        ref: "Drink",
        // autopopulate: true
    }]
}, {

    timestamps: true,
    versionKey: false
})

// restaurantSchema.plugin(require('mongoose-autopopulate'))

module.exports = model("Restaurant", restaurantSchema);