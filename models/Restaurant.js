const {
    model,
    Schema
} = require('mongoose')

const restaurantSchema = new Schema({
        name: String,
        giro: {
            type: String,
            enum: ['Restaurant', 'Bar', 'Antro', 'Cantina'],
            default: 'Restaurant'
        },
        location: {
            addres: {
                type: String,
                default: 'Point',
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

    }, {
        timestamps: true,
        versionKey: false
    })
    //HOLA CRIS
module.exports = model('Restaurant', restaurantSchema)