const dealHelper = require("../helper/dealWithJson.helper")
const dataHelper = require("../helper/data.helper")

class Book {

    static allBooks = (req, res) => {
        const books = dealHelper.readFromJSON()
        res.render("allBooks", {
            pageTitle: "All book",
            books,
            hasBooks: books.length
        })
    }

    static book = (req, res) => {
        const books = dealHelper.readFromJSON()
        const bookIndex = dataHelper.getId(books, "id", req.params.id)
        if (bookIndex >= 0) {
            res.render("book", {
                pageTitle: "Signle book",
                book: books[bookIndex]
            })
        } else res.render('err404', {
            pageTitle: "Page Not Found",
            message: "There is no such a ",
            err: "Invalid url please try again",
            looking: `${req.url.slice(1)} with that id`
        });
    }
    static addBook = (req, res) => {
        res.render("addBook", { pageTitle: "add Task" })
    }
    static createBook = (req, res) => {
        const bookModelRecived = { id: Date.now(), ...req.body }
        const books = dealHelper.readFromJSON()
        books.push(bookModelRecived)
        dealHelper.writeToJSON(books)
        res.redirect("/")

    }

    static deleteBook = (req, res) => {
        const books = dealHelper.readFromJSON()
        const bookIndex = dataHelper.getId(books, "id", req.params.id)
        if (bookIndex >= 0) {
            books.splice(bookIndex, 1)
        } else {
            res.redirect("/")
            return
        }
        dealHelper.writeToJSON(books)
        res.redirect("/")
    }

    static editBook = (req, res) => {
        const books = dealHelper.readFromJSON()
        const book = dataHelper.getId(books, "id", req.params.id)
        res.render("editBook", {
            pageTitle: "edit page",
            result: books[book]
        })
    }

    static updateBookData = (req, res) => {
        const books = dealHelper.readFromJSON()
        const book = dataHelper.getId(books, "id", req.params.id)
        console.log(req.params.id)
        if (book == -1) return res.render("err404", { pageTitle: "invalid", err: "invalid id" })
        const newBook = { id: req.params.id, ...req.body }
        newBook.status == "on" ? newTask.status = true : newBook.status = false
        books[book] = newBook
        dealHelper.writeToJSON(books)
        res.redirect(`/book/${req.params.id}`)
    }


}


module.exports = Book