const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()




app.get("/", (req, res) => res.send("Home page"));






app.all('*', (req, res) => res.send('err404'))


module.exports = app