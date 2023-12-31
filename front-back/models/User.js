const mongoose = require('mongoose')
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {type: String},
    email: {type: String},
    username: {type: String},
    password: {type: String},
    rol: {type: Number}
})

module.exports = User = mongoose.model('User',UserSchema)