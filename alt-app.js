const http = require('http')

const express = require('express')

const app = express()

const user = {"user1":{"name": "Jessie", "surname": "Meowth"}}

app.use("/users", (req, res, next) => {
    console.log("/users path is being used")
    res.send('<ul><li>' + user.user1.name+ ' ' + user.user1.surname +'</li></ul>')
})

app.use("/", (req, res, next) => {
    console.log("/ path is being used")
    res.send("<h1>Home page</h1> ")
})

app.listen(3023)