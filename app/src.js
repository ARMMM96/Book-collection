const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()

app.use(express.static(path.join(__dirname, "../clientSide/public")))
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../clientSide/views"))
hbs.registerPartials(path.join(__dirname, "../clientSide/layouts"))



// Insted of body parser This middleware is available in Express v4.16.0 onwards.
app.use(express.urlencoded({extended:true}))

const booksRoutes = require("./routes/books.routes")
app.use(booksRoutes) //app.use("/task",taskRoutes)



app.all('*', (req, res) => res.send('err404'))


module.exports = app