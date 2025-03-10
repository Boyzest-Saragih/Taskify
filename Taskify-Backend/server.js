const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const userRouters = require('./routers/userRouters')
const mongoose = require('mongoose')


const app = express()
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('connected to database'))
    .catch((err) => console.log("error", err))


app.use('/user', userRouters)

app.listen(2000, () => {
    console.log('running http://localhost:2000')
})