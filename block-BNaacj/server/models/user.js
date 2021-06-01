let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type:String, required: true},
    age: {type: Number, min: 18, max: 45, default: 18},
    email: {type: String, lowercase:true, match:/@/},
    password: {type:String, minlength: 5, maxlength: 15},
    createdAt: {type: Date, default: Date.now}
});