const express = require('express');

const router = express.Router();

const {
  getAllTodos,
  patchTodos,
  deleteTodo,
  createTodos
} = require('../controllers/todo.controller');

// GET fetch all ToDos
router.get('/todos', getAllTodos);
// POST Create new ToDo
router.post('/todos', createTodos);
// PATCH Update ToDo given an ID
router.patch('/todos/:id', patchTodos);
// DELETE Delete ToDo given an ID (destroy or soft delete)
router.delete('/todos/:id', deleteTodo);

module.exports = { todosRouter: router };
