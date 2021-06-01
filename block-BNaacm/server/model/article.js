let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let articleSchema = new Schema({
    title: {type: String, required: true},
    description: String
});

let Article = mongoose.model('Article', articleSchema);

module.exports = Article;