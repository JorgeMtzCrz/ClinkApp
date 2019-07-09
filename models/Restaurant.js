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
    calification: [Number]
}, {

    timestamps: true,
    versionKey: false
})

module.exports = model("Restaurant", restaurantSchema);