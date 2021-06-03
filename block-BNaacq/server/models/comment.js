let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let commentSchema = new Schema({
    content: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, required: true},
    article: {type: Schema.Types.ObjectId, required: true},
}, {timestamps: true});

module.exports = mongoose.model('Comment', commentSchema);