const db = require('../db.js')

class Voters {
    static insert(param, callback) {
        const query = `INSERT INTO voters (first_name, last_name, gender, age)
        values ('${param[0]}', '${param[1]}', '${param[2]}', ${Number(param[3])})
        `
        db.run(query, function(err) {
            if (err) {
                callback(err)
            } else {
                callback(null)
            }
        })
    }

    static update(param, callback) {
        const query = 
        `
        Update voters
        set 
        first_name = '${param[1]}',
        last_name = '${param[2]}',
        gender = '${param[3]}',
        age = ${Number(param[4])}
        where id = ${param[0]}
        `

        db.run(query, function(err){
            if (err) {
                callback(err)
            } else {
                callback(null)
            }
        })
        // console.log(query)
        // console.log('test model')
    }

    static delete(param, callback) {
        const query = 
        `
        delete from voters where id = ${param[0]}
        `

        db.run(query, function(err) {
            if (err) {
                callback(err)
            } else {
                callback(null)
            }
        })
    }
}

module.exports = Voters