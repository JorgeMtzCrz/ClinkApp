const {
    model,
    Schema
} = require('mongoose')
const plm = require('passport-local-mongoose')

const userSchema = new Schema({
    name: String,
    email: String,
    role: {
        type: String,
        enum: ['user', 'barAdmin', 'admin'],
        default: 'user',
    },
}, {
    timestamps: true,
    versionKey: false
})

userSchema.plugin(plm, {
    usernameField: 'email'
})

module.exports = model('User', userSchema)