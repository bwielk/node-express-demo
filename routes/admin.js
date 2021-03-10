const express = require('express')
const router = express.Router()

//adds a middleware function
router.get("/add-product", (req, res, next) => {
    console.log("The middleware! - add product")
    // next()//allows moving to another middlerware
    res.send('<html><body><h1>ADD PRODUCT</h1><form action="/product", method="POST"><input type="text" name="title"><button type="submit">SEND</button></form></body></html>')
})

router.post("/product", (req, res) => {
    console.log("Adding a product")
    const body = req.body
    console.log(body)
    res.redirect("/")
})

module.exports = router