const http = require('http')

const express = require('express')

const app = express();

//adds a middleware function
app.use("/add-product", (req, res, next) => {
    console.log("The middleware! - add product")
    // next()//allows moving to another middlerware
    res.send('<h1>ADD PRODUCT</h1>')
})

app.use("/", (req, res, next) => {
    console.log("The middleware! - main page")
    // next()//allows moving to another middlerware
    res.send('<h1>HOME PAGE</h1>')
})

app.listen(3022)


