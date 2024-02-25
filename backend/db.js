const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:jGWvnew8FGCPBXLh@cluster47908.zwne9vb.mongodb.net/todo-db")

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model('todo', todoSchema)

module.exports = Todo
