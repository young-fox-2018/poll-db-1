const db = require('../db.js')

class Model {
    static runDB (query, callback) {
        db.run(query, function(err) {
            if (err) {
                callback(err)
            } else {
                callback(null)
            }
        })
    }

    static insert(param, callback) {
        let table = param[0]
        let query = ''
        if (table === 'politicians') {
            query = 
            `
            INSERT INTO politicians 
            (name, party, location, grade_current)
            values 
            ('${param[1]}', '${param[2]}', '${param[3]}', ${Number(param[4])})
            `
        } else if (table === 'voters'){
            query = `INSERT INTO voters (first_name, last_name, gender, age)
            values ('${param[1]}', '${param[2]}', '${param[3]}', ${Number(param[4])})
            `
        } else if (table === 'votes') {
            query = `
            INSERT INTO votes 
            (voterId, politicianId)
            values
            (${Number(param[1])}, ${Number(param[2])})
            `
        } else {
            callback({
                message: 'table tidak ada'
            })
            return
        }

        Model.runDB(query, function(err){
            if (err) {
                callback({
                    message: `error insert data table ${table}`,
                    err: err
                })
            } else{
                callback(null)
            }
        })


        
    }

    static update(param, callback) {
        let table = param[0]
        let query = ''

        if (table === 'politicians') {
            query = `
            update politicians
            set
            name = '${param[2]}',
            party = '${param[3]}',
            location = '${param[4]}',
            grade_current = ${Number(param[5])}
            where id = ${param[1]}
            `
        } else if (table === 'voters') {
            query = 
            `
            update voters
            set 
            first_name = '${param[2]}',
            last_name = '${param[3]}',
            gender = '${param[4]}',
            age = ${Number(param[5])}
            where id = ${param[1]}
            `
        } else if (table === 'votes') {
            query = 
            `
            update votes
            set 
            voterId = ${Number(param[2])},
            politicianId = ${Number(param[3])}
            where id = ${param[1]}
            `
        } else {
            callback({
                message: 'table tidak ada'
            })
            return
        }

        Model.runDB(query, function(err){
            if (err) {
                callback({
                    message: `error insert data table ${table}`,
                    err: err
                })
            } else{
                callback(null)
            }
        })

    }

    static delete(param, callback) {
        
        let table = param[0]
        let query = ''

        if (table === 'politicians') {
            query = `
            delete from politicians where id = ${param[1]}
            `
        } else if (table === 'voters') {
            query = 
            `
            delete from voters where id = ${param[1]}
            `
        } else if (table === 'votes') {
            query = 
            `
            delete from votes where id = ${param[1]}
            `
        } else {
            callback({
                message: 'table tidak ada'
            })
            return
        }

        Model.runDB(query, function(err){
            if (err) {
                callback({
                    message: `error insert data table ${table}`,
                    err: err
                })
            } else{
                callback(null)
            }
        })
    }
}

module.exports = Model