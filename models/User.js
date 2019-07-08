const {
    model,
    Schema
} = require('mongoose')
const plm = require('passport-local-mongoose')

const userSchema = new Schema({
    name: String require,
    email: String require,
    role: {
        type: String require,
        enum: ['user', 'barAdmin', 'admin'],
        default: 'user'
    }
}, {
    timestamps: true,
    versionKey: false
})

UserSchema.plugin(plm, {
    usernameField: 'email'
})

module.exports = model('User', UserSchema)