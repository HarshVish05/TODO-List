import express from 'express'
import { createTodo, deleteTodoItem, getAllTodoList, getSingleTodoList, updateTodoItem } from '../controller/todoController.js'

const router = express.Router()

// to get all the todolist items
router.get('/',getAllTodoList)

// to create a todolist item
router.post('/create',createTodo)

// to get a specific todo item
router.get('/:id',getSingleTodoList)

// to update a todo item
router.put('/update/:id',updateTodoItem)

// to delete a todo
router.delete('/delete/:id',deleteTodoItem)


export default router

