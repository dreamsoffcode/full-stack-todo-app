const mongoose = require("mongoose");
console.log("printing string", process.env.DB_STRING)
mongoose.connect(process.env.DB_STRING)

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model('todo', todoSchema)

module.exports = Todo
