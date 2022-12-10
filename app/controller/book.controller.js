const dealHelper = require("../helper/dealWithJson.helper")
const dataHelper = require("../helper/data.helper")

class Book {

    static allBooks = (req, res) => {
        const books = dealHelper.readFromJSON()
        res.render("allBooks", {
            pageTitle: "All book", books,
            hasBooks: books.length
        })
    }

    static deleteBook = (req, res) => {
        const books = dealHelper.readFromJSON()
        const bookIndex = dataHelper.getId(books, "id", req.params.id)
        console.log(books)
        console.log(bookIndex)
        if (bookIndex >= 0) books.splice(bookIndex, 1)
        dealHelper.writeToJSON(books)
        console.log(books)
        res.redirect("/")


    }
}


module.exports = Book