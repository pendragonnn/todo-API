const express = require('express')
const router = express.Router()
const TodoController = require('../controllers/todo.controller')
const todoValidator = require('../middleware/todo.validator.middleware')


router.get('/', TodoController.getAllTodo)

router.get('/:id', TodoController.getTodoById)

router.post('/', todoValidator, TodoController.postTodo)

router.put('/:id', todoValidator, TodoController.updateTodo)

router.put('/completed/:id', TodoController.doneTodo)

router.delete('/:id', TodoController.deleteTodo)

module.exports = router