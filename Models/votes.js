const fs = require('fs')
const db = require('../Database/db')

class Votes {
    static readData(file, type, cb) {
        fs.readFile(file, type, cb)
    }
    static seedData(cb) {
        Votes.readData('./Votes.csv', 'utf8', function (err, data) {
            if (err) {
                throw err
            } else {
                data = data.toString().split('\n')
                for (let i = 1; i <= data.length - 1; i++) {
                    let fixData = data[i].split(',')
                    db.serialize(function () {
                        db.run(`INSERT INTO Votes VALUES (
                                null, ${fixData[0]}, ${fixData[1]})`, function (err) {
                                if (err) {
                                    console.log(err.message)
                                }
                            })
                    })
                }
                cb(null)
            }
        })
    }
}


module.exports = Votes