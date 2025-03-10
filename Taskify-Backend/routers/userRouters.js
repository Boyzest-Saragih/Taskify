const express = require("express")
const router = express.Router()
const userController = require('../controllers/userControllers')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/getCurrentUser', userController.authMeMiddleware,userController.getCurrentUser)


module.exports =router