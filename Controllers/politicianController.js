const Model = require('../Models/politician')
const View = require('../Views/view')

class PoliticianController {
    static seedData() {
        Model.seedData(function (err) {
            View.showSeedDataPolitician(err)
        })
    }
    static newPolitician(name, party, location, grade_current) {
        Model.newPolitician(name, party, location, grade_current, function (data) {
            View.showNewPolitician(data)
        })
    }
    static updatePolitician(id, name, party, location, grade_current) {
        Model.updatePolitician(id, name, party, location, grade_current, function (data) {
            View.showUpdatePolitician(data)
        })
    }
    static deletePolitician(id) {
        Model.deletePolitician(id, function (data) {
            View.showDeletePolitician(data)
        })
    }
}

module.exports = PoliticianController