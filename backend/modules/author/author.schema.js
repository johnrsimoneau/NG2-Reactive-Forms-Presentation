var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    firstName: String,
    lastName: String
});

module.exports = mongoose.model('Authors', AuthorSchema);