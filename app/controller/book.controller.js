const dealHelper = require("../helper/dealWithJson.helper")
class Book {

    static allBooks = (req, res) => {
        const books = dealHelper.readFromJSON()
        res.render("allBooks", {
            pageTitle: "All book", books,
            hasBooks: books.length
        })
    }


}


module.exports = Book