const Model = require('../models/Model')
const View = require('../views/View')

class Controller {
    static insert (param) {
        Model.insert(param, function(err) {
            if (err) {
                View.displayErr({
                    message: 'error insert data table',
                    err: err
                })
            } else {
                View.displayMsg(`Berhasil insert data ke table`)
            }
        })

    }

    static update (param) {
        Model.update(param, function(err) {
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
        Model.delete(param, function(err){
            if (err) {
                View.displayErr({
                    message: 'error delete data table voters',
                    err: err
                })
            } else {
                View.displayMsg(`Berhasil delete data id ke ${param[1]} table ${param[0]}`)
            }
        })
    }

    static help () {
        View.displayMsg(`
        list command:
        1. insert <table name> <parameter>
        2. update <table name> <parameter>
        3. delete <table name> <id>
        `)
    }
}


module.exports = Controller