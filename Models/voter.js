const fs = require('fs')
const db = require('../Database/db')

class Voter {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.age = age
    }
    static readData(file, type, cb) {
        fs.readFile(file, type, cb)
    }
    static seedData(cb) {
        Voter.readData('./Voters.csv', 'utf8', function (err, data) {
            if (err) {
                throw err
            } else {
                data = data.toString().split('\n')
                for (let i = 1; i <= data.length - 1; i++) {
                    let fixData = data[i].split(',')
                    db.serialize(function () {
                        db.run(`INSERT INTO Voters VALUES (
                                null, "${fixData[0]}", "${fixData[1]}", "${fixData[2]}", ${fixData[3]})`, function (err) {
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
    static newVoter(firstName, lastName, gender, age, cb) {
        let voter = new Voter(firstName, lastName, gender, age)
        db.run(`INSERT INTO Voters VALUES
              (null, "${voter.firstName}", "${voter.lastName}", "${voter.gender}", ${voter.age})`, function (err) {
                if (err) {
                    console.log(err.message)
                } else {
                    db.all(`SELECT * FROM Voters`, function (err, data) {
                        if (err) {
                            console.log(err.message)
                        } else {
                            cb(data)
                        }
                    })
                }
            })
    }
    static updateVoter(id, firstName, lastName, gender, age, cb) {
        db.run(`UPDATE Voters
            SET firstName = "${firstName}",
                lastName = "${lastName}",
                gender = "${gender}",
                age = ${age}
            WHERE id = ${id}`, function (err) {
                if (err) {
                    console.log(err.message)
                } else {
                    db.get(`SELECT * FROM Voters WHERE id = ${id}`, function (err, data) {
                        if (err) {
                            console.log(err.message)
                        } else {
                            cb(data)
                        }
                    })
                }
            })
    }
    static deleteVoter(id, cb) {
        db.run(`DELETE FROM Voters
                WHERE id = ${id}`, function (err) {
                if (err) {
                    console.log(err.message)
                } else {
                    db.get(`SELECT * FROM Voters WHERE id = ${id}`, function (err, data) {
                        if (err) {
                            console.log(err.message)
                        } else {
                            cb(data)
                        }
                    })
                }
            })
    }
}


module.exports = Voter