const fs = require("fs")

class Book {

    static allBooks = (req, res) => {
        let booksFetch = () => {
            let data
            try {
                data = JSON.parse(fs.readFileSync('model/books.json'))
            }
            catch (e) {
                data = []
            }
            return data
        };
        const books = booksFetch()
        books.forEach(element => {
            console.log(element)            
        });
        res.render("allBooks", {books})


    }






}


module.exports = Book