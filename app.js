const http = require('http')
const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRouters = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin', adminRoutes)
app.use(shopRouters)

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "views", "pageNotFound.html"))
})

app.listen(3022)


