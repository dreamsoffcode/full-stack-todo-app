const { createTodo, updateTodo } = require("../types.js");

function validateTodo(request, response, next) {
  const body = request.body;
  const parseTodo = createTodo.safeParse(body);
  if (!parseTodo.success)
    res.status(411).json({
      message: "Invalid Input",
    });
  else next();
}

function validateId(request, response, next) {
  const body = request.body;
  console.log(request.body)
  const parseTodo = updateTodo.safeParse(body);
  if (!parseTodo.success)
    response.status(411).json({
      message: "Invalid Input",
    });
  else next();
}

module.exports = {
  validateTodo,
  validateId,
};
