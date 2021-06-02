let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    email: {type: String, lowercase: true},
    age: {type: Number, default: 0},
    password: {type: String, minlength: 5},
    createdAt: {type: Date, default: new Date()},
    favoutites: [String]
}, {timestamps: true});

let User = mongoose.model('User', userSchema);

module.exports = User;