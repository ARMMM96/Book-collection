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
}
module.exports = DealWithJson