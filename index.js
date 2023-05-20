const express = require("express")
const cors = require("cors")
require("dotenv").config({path:"./.env"})
const mongoose = require("mongoose")
const { addTodo, getTodo, updateTodo, deleteTodo } = require("./controller/todoController")
mongoose.connect(process.env.MONGO_url)
const app = express()
app.use(express.json())    // front end data to json
app.use(cors())   

app.post("/todo/add",addTodo)
app.get("/todo",getTodo)
app.put("/todo/:id",updateTodo)
app.delete("/todo/:id",deleteTodo)

mongoose.connection.once("open",()=>{
    console.log("db connected");
    app.listen(5000, console.log("server running... http://localhost:5000"))
})
