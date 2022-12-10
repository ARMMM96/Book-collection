const fs = require("fs")
class DealWithJson {
    static readFromJSON = () => {
        let data
        try {
            data = JSON.parse(fs.readFileSync(process.env.BOOKSDATA))
        }
        catch (e) {
            data = []
        }
        return data
    }

    static writeToJSON = (data) => fs.writeFileSync(process.env.BOOKSDATA, JSON.stringify(data))

}
module.exports = DealWithJson