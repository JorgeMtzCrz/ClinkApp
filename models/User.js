const {
    model,
    Schema
} = require('mongoose')
const plm = require('passport-local-mongoose')

const UserSchema = new Schema({
    name: String require,
    email: String require,
    role: {
        type: String require,
        enum: ['user', 'admin'],
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