import { Todo } from "../models/todoSchema.js";

export const getAllTodoList = async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json({
    success: true,
    todos,
  });
};

export const createTodo = async (req, res) => {
  const { title, description, isDone } = req.body;

  if (!title || !description || isDone === null) {
    return res.status(400).json({
      message: "Please enter all fields",
    });
  }

  await Todo.create({
    title,
    description,
    isDone,
  });

  res.status(200).json({
    success: true,
    message: "Task is created",
  });
};

export const getSingleTodoList = async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findById(id);

  if (!todo) {
    res.status(404).json({
      message: "Todo item not found",
    });
  }

  res.status(200).json({
    success: true,
    todo
  });
};

export const updateTodoItem = async(req,res) => {

    const {id} = req.params
    const {title, description, isDone} = req.body

    const todo = await Todo.findById(id)
    if(!todo){
        res.status(404).json({message:"Todo item was not found"})
    }

    if(title) todo.title = title
    if(description) todo.description = description
    if(isDone) todo.isDone = isDone

    await todo.save()

    res.status(200).json({
        success: true,
        message: "Item Updated Successfully"
    })

}

export const deleteTodoItem = async(req,res)=>{
    const {id} = req.params
    // const todo = await Todo.findById(id)

    await Todo.deleteOne({_id: id})

    res.status(200).json({
        success: true,
        message: "Item deleted Successfully"
    })

}
