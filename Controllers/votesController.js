const Model = require('../Models/votes')
const View = require('../Views/view')

class VotesController {
    static seedData() {
        Model.seedData(function (err) {
            View.showSeedDataVotes(err)
        })
    }
}

module.exports = VotesController