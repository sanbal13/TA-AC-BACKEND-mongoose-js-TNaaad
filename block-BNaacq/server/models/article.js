let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let articleSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    tags: [String],
    likes: {type: Number, default: 0},
    author: {type: Schema.Types.ObjectId, required: true},
    comments:[Schema.Types.ObjectId],     
}, {timestamps: true});

module.exports = mongoose.model('Article', articleSchema);

