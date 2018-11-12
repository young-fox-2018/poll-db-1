const fs = require('fs')
const { db } = require('./setup')

class SeedData {
    static readData(path, callback) {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) callback(err, null)
            else {
                callback(null, data.split('\n'))
            }
        })
    }

    static seedDataPoliticians(callback) {
        SeedData.readData('./politicians.csv', function (err, data) {
            if (err) callback(err, null)
            else {
                db.serialize(function () {
                    for (let i = 1; i < data.length; i++) {
                        let splitted = data[i].split(',')
                        db.run(`INSERT INTO politicians (name, party, location, grade_current)
                                VALUES ("${splitted[0]}", "${splitted[1]}", "${splitted[2]}", "${splitted[3]}")`,
                            function (err) {
                                if (err) callback(err)
                            })
                    }
                    callback(null)
                })
            }
        })
    }

    static seedDataVoters(callback) {
        SeedData.readData('./voters.csv', function (err, data) {
            if (err) callback(err, null)
            else {
                db.serialize(function () {
                    for (let i = 1; i < data.length; i++) {
                        let splitted = data[i].split(',')
                        db.run(`INSERT INTO voters (first_name, last_name, gender, age)
                                VALUES ("${splitted[0]}", "${splitted[1]}", "${splitted[2]}", "${splitted[3]}")`,
                            function (err) {
                                if (err) callback(err)
                            })
                    }
                    callback(null)
                })
            }
        })
    }

    static seedDataVotes(callback) {
        SeedData.readData('./votes.csv', function (err, data) {
            if (err) callback(err, null)
            else {
                db.serialize(function () {
                    for (let i = 1; i < data.length; i++) {
                        let splitted = data[i].split(',')
                        db.run(`INSERT INTO votes (voterId, politicianId)
                                VALUES ("${splitted[0]}", "${splitted[1]}")`,
                            function (err) {
                                if (err) callback(err)
                            })
                    }
                    callback(null)
                })
            }
        })
    }

    static insertDataPolitician(name, party, location, grade_current, callback) {
        db.serialize(function () {
            db.run(`INSERT INTO politicians (name, party, location, grade_current)
                    VALUES ("${name}", "${party}", "${location}", "${grade_current}")`,
                function (err) {
                    if (err) callback(err)
                    else callback(null)
                })
        })
    }

    static insertDataVoter(first_name, last_name, gender, age, callback) {
        db.serialize(function () {
            db.run(`INSERT INTO voters (first_name, last_name, gender, age)
                    VALUES ("${first_name}", "${last_name}", "${gender}", "${age}")`,
                function (err) {
                    if (err) callback(err)
                    else callback(null)
                })
        })
    }

    static insertDataVote(voterId, politicianId, callback) {
        db.serialize(function () {
            db.run(`INSERT INTO votes (voterId, politicianId)
                    VALUES (${voterId}, ${politicianId})`,
                function (err) {
                    if (err) callback(err)
                    else callback(null)
                })
        })
    }

    static updateData(id, table, field, newValue, callback) {
        db.serialize(function () {
            db.run(`UPDATE ${table}
                    SET ${field} = "${newValue}"
                    WHERE id = ${id}`,
                function (err) {
                    if (err) callback(err)
                    else callback(null)
                })
        })
    }

    static deleteTableData(id, table, callback) {
        db.serialize(function () {
            db.run(`DELETE FROM ${table}
                    WHERE id = ${id}`,
                function (err) {
                    if (err) callback(err)
                    else callback(null)
                })
        })
    }

    static showRange(party, min, max, callback) {
        db.all(`SELECT name, party, grade_current 
                FROM politicians
                WHERE (party = "${party}"
                AND grade_current
                BETWEEN ${min} AND ${max})`,
            function (err, data) {
                if (err) callback(err)
                else callback(data)
            })
    }

    static voteCount(name, callback) {
        db.all(`SELECT COUNT(*) AS totalVote, politicians.name
                FROM votes
                INNER JOIN politicians
                ON votes.politicianId = politicians.id
                WHERE politicians.name = "${name}"`,
            function (err, data) {
                if (err) callback(err)
                else callback(data)
            })
    }

    static countContains(name, callback) {
        db.all(`SELECT politicians.name,
                COUNT(votes.politicianId)
                AS totalVote
                FROM votes
                INNER JOIN politicians
                ON votes.politicianId = politicians.id
                WHERE politicians.name
                LIKE "${name}%"
                GROUP BY politicians.name`,
            function(err, data) {
                if (err) callback(err)
                else callback(data)
            })
    }

    static bestThreePoliticians(callback) {
        db.all(`SELECT COUNT(votes.politicianId)
                AS totalVote, politicians.name, politicians.party, politicians.location
                FROM votes
                INNER JOIN politicians
                ON votes.politicianId = politicians.id
                GROUP BY politicians.name
                ORDER BY COUNT (votes.politicianId) DESC
                LIMIT 3`,
            function(err, data) {
                if (err) callback(err)
                else callback(data)
            })
    }

    static politicianVoters(name, callback) {
        db.all(`SELECT *
                FROM voters
                INNER JOIN votes
                ON votes.voterId = voters.id
                INNER JOIN politicians
                ON votes.politicianId = politicians.id
                WHERE politicians.name = "${name}"`,
            function(err, data) {
                if (err) callback(err)
                else callback(data)
            })
    }
}

module.exports = SeedData