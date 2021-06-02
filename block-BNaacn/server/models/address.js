let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let addressSchema = new Schema({
    village: String,
    city: {type: String, required: true},
    state: {type: String, required: true},
    pincode: Number,
    user: Schema.Types.ObjectId
}, {timestamps: true});

module.exports = mongoose.model('Address', addressSchema);