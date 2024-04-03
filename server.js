import express from 'express'
import {config} from 'dotenv'
import router from './routes/todoRoutes.js'
import { connectDB } from './config/database.js'
import cors from 'cors'

config({
    path:"./config/config.env"
})

connectDB()

const PORT = process.env.PORT || 5000

const app = express()

// use middleware
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(cors())

// app.get('/',(req,res)=>{
//     res.send('Hello World!')
// })

app.use(router)

app.listen(PORT,()=>{
    console.log(`Server is running at Port ${PORT}`);
})