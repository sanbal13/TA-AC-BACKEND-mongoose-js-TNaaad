let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let articleSchema = new Schema({
    name: String,
    author: String,
    description: String,
    price: Number
});