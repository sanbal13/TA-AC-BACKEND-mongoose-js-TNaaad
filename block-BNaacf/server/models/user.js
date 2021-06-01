let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    age: Number,
    favorites: [String],
    marks: [Number],
});

