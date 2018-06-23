var mongoose = require('mongoose');

var schema = mongoose.Schema({
    task: String,
    done: Boolean
});

// task = db collection
var Todo = mongoose.model('tasks', schema);

module.exports = Todo;