const dealHelper = require("../helper/dealWithJson.helper")
class Book {

    static allBooks = (req, res) => {
        const books = dealHelper.readFromJSON()
        console.log(books)
        books.forEach(element => {
            console.log(element)
        });
        res.render("allBooks", { books })

    }


}


module.exports = Book