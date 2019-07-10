const {
    model,
    Schema
} = require("mongoose");
const plm = require("passport-local-mongoose");

const drinkSchema = new Schema({
    name: String,
    alcohol: {
        type: String,
        enum: ["Vodka", "Cerveza", "Tequila", "Whisky", "Ron"]
    },
    typeDrink: {
        type: String,
        enum: ["Cocktail", "Solo", "Mix"]
    },
    description: String,
    imgPath: String,
    imgName: String
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model("Drink", drinkSchema);