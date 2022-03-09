const express = require('express');

const router = express.Router();

const {
  getAllTodos,
  patchTodos,
  deleteTodo,
  createTodos
} = require('../controllers/todo.controller');

// GET fetch all ToDos
router.get('/', getAllTodos);
// POST Create new ToDo
router.post('/', createTodos);
// PATCH Update ToDo given an ID
router.patch('/:id', patchTodos);
// DELETE Delete ToDo given an ID (destroy or soft delete)
router.delete('/:id', deleteTodo);

module.exports = { todosRouter: router };
