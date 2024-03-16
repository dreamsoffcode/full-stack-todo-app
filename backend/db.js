const mongoose = require("mongoose");
mongoose.connect(DB_STRING)

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model('todo', todoSchema)

module.exports = Todo
