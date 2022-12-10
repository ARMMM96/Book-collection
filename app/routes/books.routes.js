const router = require("express").Router()

router.get("/", (req, res) => res.render("allBooks"));

router.get("/addBook", (req, res) => res.send("addbook"))
router.get("/book/:id", (req, res) => res.send(`book id ${req.params.id}`))
router.get("/edit/:id", (req, res) => res.send(`book id ${req.params.id}`))
router.get("/delete/:id", (req, res) => res.send(`book id ${req.params.id}`))




module.exports = router