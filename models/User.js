const {
    model,
    Schema
} = require('mongoose')
const plm = require('passport-local-mongoose')

const UserSchema = new Schema({
    name: String, require=true,
    email: String, require=true,
    role: {
        type: String, require=true,
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