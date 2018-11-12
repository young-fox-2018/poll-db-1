const Model = require("./model")

class Politician extends Model {
    constructor() {
        super()
    }
    static addData(data, callback) {
        let tableValue = `name,party,location,grade_current`
        let value = ""
        for (let j = 0; j < data.length; j++) {
            if (j === data.length - 1) {
                value += `"${data[j]}"`
            }
            else {
                value += `"${data[j]}",`
            }
        }
        Politician.insertData("Politicians", tableValue, value, (err, data) => {
            if (err) callback(err)
            else callback(null)
        })
    }
    static updateData(parameter, updateData, id, callback) {
        Politician.update("Politicians", parameter, updateData, id, (err, data) => {
            if (err) callback(err)
            else callback(null)
        })
    }
    static deleteData(id, callback) {
        Politician.delete("Politicians", id, (err, data) => {
            if (err) callback(err)
            else callback(null)
        })
    }

}
module.exports = Politician