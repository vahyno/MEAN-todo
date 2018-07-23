var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachement: Boolean
});

var Todos = mongoose.model('Todos', TodoSchema);

module.exports = Todos;