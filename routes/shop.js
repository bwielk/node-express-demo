const express = require('express')
const router = express.Router()


router.get("/", (req, res, next) => {
    console.log("The middleware! - main page")
    // next()//allows moving to another middlerware
    res.send('<h1>HOME PAGE</h1>')
})

module.exports = router