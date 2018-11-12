const db = require('../db')


class Model {
    static insert(table, data, callback) {
        // console.log(data)
        if (table === 'Politicians') {
            db.run(`INSERT INTO Politicians (name,party,location,grade_current) VALUES ("${data[0]}","${data[1]}","${data[2]}","${data[3]}")`, (err) => {
                if (err) callback(err)
                callback(null, null)
            })
        } else if (table = 'Voters') {
            db.run(`INSERT INTO Voters (first_name,last_name,gender,age) VALUES ("${data[0]}","${data[1]}","${data[2]}","${data[3]}")`, (err) => {
                if (err) callback(err)
                callback(null, null)
            })
        } else if (table = 'Votes') {
            db.run(`INSERT INTO Votes (voterId,politicianId) VALUES ("${data[0]}","${data[1]}")`, (err) => {
                if (err) callback(err)
                callback(null, null)
            })
        } else {
            // callback('Your table name is false!', null)
        }
    }

}


module.exports = Model