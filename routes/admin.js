const express = require('express')
const router = express.Router()
const path = require('path')

//adds a middleware function
router.get("/add-product", (req, res, next) => {
    console.log("The middleware! - add product")
    // next()//allows moving to another middlerware
    res.sendFile(path.join(__dirname, '../', 'views', 'admin.html'))
})

router.post("/add-product", (req, res) => {
    console.log("Adding a product")
    const body = req.body
    console.log(body)
    res.redirect("/")
})

module.exports = router