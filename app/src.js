const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()

app.use(express.static(path.join(__dirname, "../clientSide/public")))
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../clientSide/views"))
hbs.registerPartials(path.join(__dirname, "../clientSide/layouts"))

app.get("/", (req, res) => res.render("allBooks"));






app.all('*', (req, res) => res.send('err404'))


module.exports = app