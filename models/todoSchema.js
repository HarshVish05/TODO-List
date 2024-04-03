import mongoose from "mongoose";


const todoSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    isDone:{
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    completedAt:{
        type: Date,
        default: null
    }
})

export const Todo = mongoose.model("Todo",todoSchema)