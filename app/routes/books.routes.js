const router = require("express").Router()
const bookControler = require("../controller/book.controller")

router.get("/", bookControler.allBooks);


router.get("/addBook", (req, res) => res.send("addbook"))
router.get("/book/:id", bookControler.book)
router.get("/edit/:id", (req, res) => res.send(`book id ${req.params.id}`))
router.get("/delete/:id", bookControler.deleteBook)




module.exports = router