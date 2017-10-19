const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    firstName: String,
    lastName: String
});

module.exports = mongoose.model('Author', AuthorSchema);