const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authMeMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({ message: "need token" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({ message: "need all fields" })
        }

        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ message: "Email has already exist" })
        }

        const hashedPass = await bcrypt.hash(password, 10)

        const newUSer = new User({
            name: name,
            email: email,
            password: hashedPass,
            role: "user",
            image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        })

        await newUSer.save()

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: "All fields required" })
        }

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(401).json({ message: "User not found" })
        }

        const checkPass = await bcrypt.compare(password, user.password)

        if (!checkPass) {
            return res.status(401).json({ message: "Invalid Email or Password" })
        }

        const token = jwt.sign({
            userId: user._id,
            name: user.name,
            email: user.email,
            image: user.image
        }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXP_IN
        })

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: "Strict",
            maxAge: 24 * 60 * 60 * 1000
        })

        return res.status(200).json({ message: 'Login Succes' })

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

const logout = async (req, res) => {
    res.clearCookie('token')
    res.status(200).json({ message: "Logout succesfully" });
}

const getCurrentUser = async (req, res) => {
    try {
        const user = req.user
        res.status(200).json({
            message: "get current user successfully",
            result: {
                id: user._id,
                email: user.email,
                name: user.name,
                image: user.image,
                role: user.role,
            },
        });

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

module.exports = ({
    authMeMiddleware,
    register,
    login,
    logout,
    getCurrentUser,
})