const fs = require('fs')
const db = require('../Database/db')

class Politician {
    constructor(name, party, location, grade_current) {
        this.name = name
        this.party = party
        this.location = location
        this.grade_current = grade_current
    }
    static readData(file, type, cb) {
        fs.readFile(file, type, cb)
    }
    static seedData(cb) {
        Politician.readData('./politicians.csv', 'utf8', function (err, data) {
            if (err) {
                throw err
            } else {
                data = data.toString().split('\n')
                for (let i = 1; i <= data.length - 1; i++) {
                    let fixData = data[i].split(',')
                    db.serialize(function () {
                        db.run(`INSERT INTO Politicians VALUES (
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
    static newPolitician(name, party, location, grade_current, cb) {
        let politician = new Politician(name, party, location, grade_current)
        db.run(`INSERT INTO Politicians VALUES
              (null, "${politician.name}", "${politician.party}", "${politician.location}", ${politician.grade_current})`, function (err) {
                if (err) {
                    console.log(err.message)
                } else {
                    db.all(`SELECT * FROM Politicians`, function (err, data) {
                        if (err) {
                            console.log(err.message)
                        } else {
                            cb(data)
                        }
                    })
                }
            })
    }
    static updatePolitician(id, name, party, location, grade_current, cb) {
        db.run(`UPDATE Politicians
            SET name = "${name}",
                party = "${party}",
                location = "${location}",
                gradeCurrent = ${grade_current}
            WHERE id = ${id}`, function (err) {
                if (err) {
                    console.log(err.message)
                } else {
                    db.get(`SELECT * FROM Politicians WHERE id = ${id}`, function (err, data) {
                        if (err) {
                            console.log(err.message)
                        } else {
                            cb(data)
                        }
                    })
                }
            })
    }
    static deletePolitician(id,cb){
        db.run(`DELETE FROM Politicians
                WHERE id = ${id}`, function(err){
                    if (err){
                        console.log(err.message)
                    } else {
                        db.get(`SELECT * FROM Politicians WHERE id = ${id}`, function (err, data) {
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


module.exports = Politician