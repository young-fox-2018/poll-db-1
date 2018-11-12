const Model = require("./model")

class Vote extends Model {
    constructor() {
        super()
    }
    static addData(data, callback) {
        let tableValue = `voterId,politicianId`
        let value = ""
        for (let j = 0; j < data.length; j++) {
            if (j === data.length - 1) {
                value += `"${data[j]}"`
            }
            else {
                value += `"${data[j]}",`
            }
        }
        Vote.insertData("Votes", tableValue, value, (err, data) => {
            if (err) callback(err)
            else callback(null)
        })
    }
    static updateData(parameter, updateData, id, callback) {
        Vote.update("Votes", parameter, updateData, id, (err, data) => {
            if (err) callback(err)
            else callback(null)
        })
    }
    static deleteData(id, callback) {
        Vote.delete("Votes", id, (err, data) => {
            if (err) callback(err)
            else callback(null)
        })
    }
}
module.exports = Vote