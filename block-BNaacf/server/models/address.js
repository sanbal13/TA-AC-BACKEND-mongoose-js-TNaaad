let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var addressSchema = new Schema({
    village: String,
    city: String,
    state: String,
    pincode: Number,
    user: Schema.Types.ObjectId
})