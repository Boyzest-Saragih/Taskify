const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title:String,
    desc:String,
    status:{String, enum:['todo','in-progress','completed'], default:"todo"},
    userId : {typr:mongoose.Schema.Types.ObjectId, ref:"User"},
    crearedAt:{type:Date,default:Date.now}
})

module.exports = mongoose.model("Task",TaskSchema)