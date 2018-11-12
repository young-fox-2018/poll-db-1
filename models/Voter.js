const db    = require('./db')
const FileSystem = require('./FileSystem')

class Voter {

    static createTable(cb){
        db.serialize(function() {
            db.run(`DROP TABLE IF EXISTS voters`, function(err) {
                if(err) cb(err)
            })

            let create = `CREATE TABLE IF NOT EXISTS voters(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                firstName TEXT NOT NULL,
                lastName TEXT NOT NULL,
                gender TEXT NOT NULL,
                age INTEGER NOT NULL
                )`

            db.run(create, function(err) {
                if(err) cb(err)
                else cb(null)
            })
        })
    }
    
    static add(item, cb){
        const query = `INSERT INTO voters (firstName, lastName, gender, age)
            VALUES ("${item[0]}", "${item[1]}", "${item[2]}", ${item[3]})`

        db.serialize(function() {
            db.run(query, function (err) {
                if (err) cb(err)
                else cb(null)
            })
        })
    }

    static seeding(cb){
        FileSystem.readFile('./voters.csv', function (err, data) {
            if(err) cb(err)
            else{
                let dataError = 0
                data.forEach((item, index) => {

                    Voter.add(item, function(err) {
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

module.exports = Voter