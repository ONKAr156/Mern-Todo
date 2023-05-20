//cost result = await TODO.create() // add to db
//cost result = await TODO.find() // get all the data
//cost result = await TODO.findByIdAndUpdate() //update
//cost result = await TODO.findByIdAndDelete() //delete
const TODO = require("./../models/Todo")
exports.addTodo =async(req,res)=>{
    try {
const result = await  TODO.create(req.body)  
res.json({
    message:"add Todo success",
    result
})
} catch (error) {
    res.json({
        message:"Something went wrong " 
    })
}
}

exports.getTodo =async(req,res)=>{
    try {
        const result = await  TODO.find()  
        res.json({
            message:"add Todo success",
            result
        })
    } catch (error) {
        res.json({
            message:"Something went wrong " + error
        })
    }
}
exports.updateTodo =async(req,res)=>{
    try {
        const todoId = req.params.id
    const result = await TODO.findByIdAndUpdate(todoId,req.body, {new:true}) //update
    res.json({
    message:"update Todo success",
    result
})
} catch (error) {
    res.json({
        message:"Something went wrong " + error
    })
}
}
exports.deleteTodo =async(req,res)=>{
    try {
        const todoId = req.params.id
    const result = await TODO.findByIdAndDelete(todoId) //delete
    res.json({
    message:"add delete success",
    result
})
} catch (error) {
    res.json({
        message:"Something went wrong " + error
    })
}
}

//when 'module.exports' is written it is default export
// only exports normal