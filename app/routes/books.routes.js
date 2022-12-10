const router = require("express").Router()
const bookControler = require("../controller/book.controller")

router.get("/", bookControler.allBooks);


router.get("/addBook", bookControler.addBook)
router.post("/addBook", bookControler.createBook)

router.get("/book/:id", bookControler.book)

router.get("/edit/:id", bookControler.editBook)
router.post("/edit/:id", bookControler.updateBookData)

router.get("/delete/:id", bookControler.deleteBook)




module.exports = router