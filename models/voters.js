const Model = require("./model")

class Voter extends Model {
    constructor() {
        super()
    }
    static addData(data, callback) {
        let tableValue = `first_name,last_name,gender,age`
        let value = ""
        for (let j = 0; j < data.length; j++) {
            if (j === data.length - 1) {
                value += `"${data[j]}"`
            }
            else {
                value += `"${data[j]}",`
            }
        }
        Voter.insertData("Voters", tableValue, value, (err, data) => {
            if (err) callback(err)
            else callback(null)
        })
    }
    static updateData(parameter, updateData, id, callback) {
        Voter.update("Voters", parameter, updateData, id, (err, data) => {
            if (err) callback(err)
            else callback(null)
        })
    }
    static deleteData(id, callback) {
        Voter.delete("Voters", id, (err, data) => {
            if (err) callback(err)
            else callback(null)
        })
    }

}
module.exports = Voter