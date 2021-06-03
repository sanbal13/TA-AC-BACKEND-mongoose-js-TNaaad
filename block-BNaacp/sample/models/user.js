let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, lowercase: true},
    sports: [String]
});

module.exports = mongoose.model('User', userSchema);