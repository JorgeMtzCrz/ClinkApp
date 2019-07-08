const {
    model,
    Schema
} = require('mongoose')

const restaurantSchema = new Schema({
    name: String,
    giro: {
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
    timestamps: true,
    versionKey: false
})

module.exports = model('Restaurant', restaurantSchema)