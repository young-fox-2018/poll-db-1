const Vote = require('../models/Vote')
const View = require('../views/View')

class VoteController {

    static createTable() {
        Vote.createTable( (err) => {
            if(err) View.showError
            else View.showData(`Votes' table has been created!`)
        })
    }

    static seeding(){
        Vote.seeding(function (err) {
            if(err) View.showError(err)
            else View.showData(`Votes' seeding done`)
        })
    }

    static add(input){
        Vote.add(input, function(err) {
            if(err) View.showError(err)
            else View.showData(`Adding data to votes' table successful`)
        })
    }

}

module.exports = VoteController