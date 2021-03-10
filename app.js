const http = require('http')

const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRouters = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use(adminRoutes)
app.use(shopRouters)

app.listen(3022)


