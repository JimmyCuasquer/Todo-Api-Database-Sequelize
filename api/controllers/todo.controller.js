//models
const { Todo } = require('../models/todo.model');

//utils
const { filterObj } = require('../util/filterObj');

exports.getAllTodos = async (req, res) => {
  try {
    const todoDb = await Todo.findAll();

    if (!todoDb) {
      res
        .status(404)
        .json({ status: 'error', message: 'Not found Id in the database' });
    }
    res.status(200).json({ status: 'success', data: { todos: todoDb } });
  } catch (error) {
    console.log(error);
  }
};
exports.createTodos = async (req, res) => {
  try {
    const { name } = req.body;
    const newTodo = await Todo.create({ name });
    res.status(201).json({ status: 'success', data: { newTodo } });
  } catch (error) {
    console.log(error);
  }
};
exports.patchTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const data = filterObj(req.body, 'name');
    const todo = await Todo.findOne({ where: { id: id } });
    if (!todo) {
      res
        .status(404)
        .json({ status: 'error', message: 'Cant update todo, Invalid ID' });
      return;
    }
    await Todo.update({ ...data });
    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOne({ where: { id } });
    //const todoIndex = todos.findIndex((todo) => todo.id === +id);
    if (!todo) {
      res
        .status(404)
        .json({ status: 'error', message: 'Cant delete todo Invalid ID' });
      return;
    }
    await todo.destroy();
    //posts.splice(todoIndex, 1);
    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};
