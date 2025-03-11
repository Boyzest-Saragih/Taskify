const Task = require('../models//taskModel')

const createTask = async (req, res) => {
    try {
        const { title, desc, status } = req.body
        if (!title) { return res.status(400).json({ message: "title field required" }) }
        const newTask = new Task({ title, desc, status, user: req.user.userId })
        console.log(req.user.userId)
        await newTask.save()
        return res.status(200).json({ message: "Create task succes", data: newTask })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params
        const { title, desc, status } = req.body
        const updatedTask = await Task.findByIdAndUpdate(id, { title, desc, status },{new:true})
        if (!updatedTask){return res.status(400).json({message:"Tidak ada id task yang ditemukan"})}
        return res.status(200).json({ message: "update task success", data: updatedTask })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const deletedTask = await Task.findByIdAndDelete(id)
        if (!deletedTask){return res.status(400).json({message:"Tidak ada id task yang ditemukan"})}
        return res.status(200).json({ message: "Success deleted task" })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const getTask = async (req, res) => {
    try {
        const tasks = await Task.find({user:req.user.userId}).populate("user", "name email")
        return res.status(200).json({ message: "success get task data", data: tasks })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

module.exports = ({
    createTask,
    getTask,
    updateTask,
    deleteTask
})