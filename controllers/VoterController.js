const Voter = require('../models/Voter')
const View = require('../views/View')

class VoterController {

    static createTable() {
        Voter.createTable( (err) => {
            if(err) View.showError
            else View.showData(`Voters' table has been created!`)
        })
    }

    static seeding(){
        Voter.seeding(function (err) {
            if(err) View.showError(err)
            else View.showData(`Voters' seeding done`)
        })
    }

    static add(input){
        Voter.add(input, function(err) {
            if(err) View.showError(err)
            else View.showData(`Adding data to voters' table successful`)
        })
    }

}

module.exports = VoterController