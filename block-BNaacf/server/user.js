let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    age: Number,
    favorites: [String],
    marks: [Number],
});

let addressSchema = new Schema({
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: Schema.Types.ObjectId
})