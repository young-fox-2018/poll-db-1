const Model = require('../Models/Voter')
const View = require('../Views/view')

class VoterController {
    static seedData() {
        Model.seedData(function (err) {
            View.showSeedDataVoter(err)
        })
    }
    static newVoter(firstName, lastName, gender, age) {
        Model.newVoter(firstName, lastName, gender, age, function (data) {
            View.showNewVoter(data)
        })
    }
    static updateVoter(id, firstName, lastName, gender, age) {
        Model.updateVoter(id, firstName, lastName, gender, age, function (data) {
            View.showUpdateVoter(data)
        })
    }
    static updateVoter(id, firstName, lastName, gender, age) {
        Model.updateVoter(id, firstName, lastName, gender, age, function (data) {
            View.showUpdateVoter(data)
        })
    }
    static deleteVoter(id) {
        Model.deleteVoter(id, function (data) {
            View.showDeleteVoter(data)
        })
    }
}

module.exports = VoterController