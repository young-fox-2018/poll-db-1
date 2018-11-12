const Seeder = require('../Models/seed-data')
const Models = require('../Models/Model')
const View = require('../Views/View')

class Controller {
    static seed() {
        Seeder.insertData()
    }
    static insert(table, data) {
        Models.insert(table, data, (err, data) => {
            if (err) {
                View.viewError(err)
            } else {
                View.viewData(`Succes save data to database ${table}!`)
            }
        })
    }
    static update(table, id, column, value) {
        Models.update(table, id, column, value, (err, data) => {
            if (err) {
                View.viewError(err)
            } else {
                View.viewData(`Succes save data to database ${table}!`)
            }

        })
    }
}

module.exports = Controller