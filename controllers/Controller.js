const Voters = require('../models/Voters')
const View = require('../views/View')

class Controller {
    static insert (param) {
        Voters.insert(param, function(err) {
            if (err) {
                View.displayErr({
                    message: 'error insert data table voters',
                    err: err
                })
            } else {
                View.displayMsg(`Berhasil insert data ke table voters`)
            }
        })

    }

    static update (param) {
        Voters.update(param, function(err) {
            if (err) {
                View.displayErr({
                    message: 'error update data table voters',
                    err: err
                })
            } else {
                View.displayMsg(`Berhasil update data table voters`)
            }
        })
    }

    static delete(param) {
        Voters.delete(param, function(err){
            if (err) {
                View.displayErr({
                    message: 'error delete data table voters',
                    err: err
                })
            } else {
                View.displayMsg(`Berhasil delete data id ke ${param[0]}`)
            }
        })
    }

    static help () {
        View.displayMsg(`
        list command:
        1. insert <first_name> <last_name> <gender> <age>
        2. update <id> <first_name> <last_name> <gender> <age>
        3. delete <id>
        `)
    }
}


module.exports = Controller