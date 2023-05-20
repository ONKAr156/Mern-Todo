const mongoose = require("mongoose")

module.exports = mongoose.model("todo",mongoose.Schema({
   task:{
    type:String,
    required:true
   },
   desc:String,
   complete:Boolean,
   priority:Number 
}))

//when module.exports is written it is default export
// only exports normal