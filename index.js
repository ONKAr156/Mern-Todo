const express = require("express")
const cors = require("cors")
require("dotenv").config({path:"./.env"})
const mongoose = require("mongoose")
const { addTodo, getTodo, updateTodo, deleteTodo } = require("./controller/todoController")
mongoose.connect(process.env.MONGO_url)
const app = express()
app.use(express.json())    // front end data to json
app.use(cors())   
app.use(express.static("Public"))

app.post("/Api/todo/add",addTodo)
app.get("/Api/todo",getTodo)
app.put("/Api/todo/:id",updateTodo)
app.delete("/Api/todo/:id",deleteTodo)

mongoose.connection.once("open",()=>{
    console.log("db connected");
    app.listen(5000, console.log("server running... http://localhost:5000"))
})
