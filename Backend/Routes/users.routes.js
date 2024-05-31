const express = require('express');

const userRouter = express.Router()

userRouter.get("/", (req, res) => {
    res.send("hello world")
})


userRouter.get("/", (req, res) => {
   
})


userRouter.get("/", (req, res) => {
    res.send("hello world")
})

userRouter.get("/", (req, res) => {
    res.send("hello world")
})

module.exports = { userRouter }