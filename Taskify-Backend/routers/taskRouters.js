const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')
const userController = require('../controllers/userControllers')

router.get("/",userController.authMeMiddleware,taskController.getTask)
router.post("/",userController.authMeMiddleware,taskController.createTask)
router.put("/:id",userController.authMeMiddleware,taskController.updateTask)
router.delete("/:id",userController.authMeMiddleware,taskController.deleteTask)

module.exports = router