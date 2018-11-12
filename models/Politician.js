const db    = require('./db')
const FileSystem = require('./FileSystem')

class Politician {

    static createTable(cb){
        db.serialize(function() {
            db.run(`DROP TABLE IF EXISTS politicians`, function(err) {
                if(err) cb(err)
            })

            let create = `CREATE TABLE IF NOT EXISTS politicians(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                party TEXT NOT NULL,
                location TEXT NOT NULL,
                grade_current NUMERIC NOT NULL
                )`

            db.run(create, function(err) {
                if(err) cb(err)
                else cb(null)
            })
        })
    }
    
    static add(item, cb){
        const query = `INSERT INTO politicians (name, party, location, grade_current)
            VALUES ("${item[0]}", "${item[1]}", "${item[2]}", ${item[3]})`

        db.serialize(function() {
            db.run(query, function (err) {
                if (err) cb(err)
                else cb(null)
            })
        })
    }

    static seeding(cb){
        FileSystem.readFile('./politicians.csv', function (err, data) {
            if(err) cb(err)
            else{
                let dataError = 0
                data.forEach((item, index) => {

                    Politician.add(item, function(err) {
                        if(err) {
                            dataError++
                            cb({err, dataError})
                        }
                        if (index === data.length -1) cb(null)
                    })
                })
                                
            }
        })
    }
    
    static q1(cb){
        db.all(`SELECT name, party, grade_current FROM politicians
            WHERE party = 'R' AND grade_current BETWEEN 9 AND 11`, function(err, data) {
                if(err) cb(err)
                else cb(null, data)
            })
    }

    static q2(cb){
        db.all(`SELECT count(*) as totalVote, politicians.name 
            FROM votes INNER JOIN politicians 
            ON politicianId = politicians.id
            WHERE politicians.name = "Olympia Snowe"`, function(err, data) {
            if(err) cb(err)
            else cb(null, data)
        })
    }

    static q3(cb){
        db.all(`SELECT politicians.name, count(*) as totalVote
            FROM politicians INNER JOIN votes
            ON politicianId = politicians.id
            WHERE politicians.name LIKE '%Adam%'
            GROUP BY politicians.name`, function(err, data) {
            if(err) cb(err)
            else cb(null, data)
        })
    }

    static q4(cb){
        db.all(`SELECT count(*) as totalVotes, politicians.name, politicians.party, politicians.location 
            FROM votes
            INNER JOIN politicians
            ON politicianId = politicians.id
            GROUP BY politicianId
            ORDER BY totalVotes DESC
            LIMIT 3`, function(err, data) {
            if(err) cb(err)
            else cb(null, data)
        })
    }

    static q5(cb){
        db.all(`SELECT voters.firstName, voters.lastName, voters.gender, voters.age 
            FROM votes
            JOIN politicians
            ON politicianId = politicians.id
            JOIN voters
            ON voterId = voters.id
            WHERE politicians.name = "Olympia Snowe"`, function(err, data) {
            if(err) cb(err)
            else cb(null, data)
        })
    }
}

module.exports = Politician