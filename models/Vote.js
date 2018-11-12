const db    = require('./db')
const FileSystem = require('./FileSystem')

class Vote {

    static createTable(cb){
        db.serialize(function() {
            db.run(`DROP TABLE IF EXISTS votes`, function(err) {
                if(err) cb(err)
            })

            let create = `CREATE TABLE IF NOT EXISTS votes(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                voterId INTEGER NOT NULL,
                politicianId INTEGER NOT NULL
                )`

            db.run(create, function(err) {
                if(err) cb(err)
                else cb(null)
            })
        })
    }
    
    static add(item, cb){
        const query = `INSERT INTO Votes (voterId, politicianId)
            VALUES ("${item[0]}", "${item[1]}")`

        db.serialize(function() {
            db.run(query, function (err) {
                if (err) cb(err)
                else cb(null)
            })
        })
    }

    static seeding(cb){
        FileSystem.readFile('./votes.csv', function (err, data) {
            if(err) cb(err)
            else{
                let dataError = 0
                data.forEach((item, index) => {

                    Vote.add(item, function(err) {
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
    
}

module.exports = Vote