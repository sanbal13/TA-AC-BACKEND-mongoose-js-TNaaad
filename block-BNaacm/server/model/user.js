let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    email: {type: String, match:/@/, required: true},
    age: {type: Number, min: 18, max: 45, default: 18},
    createdAt: {type: Date, default: new Date()}    
});

let User = mongoose.model('User', userSchema);

module.exports = User;