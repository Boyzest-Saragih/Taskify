const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: String,
    status: { type: String, enum: ["todo", "in-progress", "done"], default: "todo" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now }
})

const Task = mongoose.model("Task", TaskSchema)
module.exports = Task