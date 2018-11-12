const Politician = require('../models/Politician')
const View = require('../views/View')

class PoliticianController {

    static help(){
        View.showData(`
        politician createTable
        politician seeding
        politician add <name> <party> <grade_current>
        politician update <id>
        politician delete <id>
        voter createTable
        voter seeding
        voter add <name> <party> <grade_current>
        voter update <id>
        voter delete <id>
        vote createTable
        vote seeding
        vote add <name> <party> <grade_current>
        vote update <id>
        vote delete <id>
        `)
    }

    static createTable() {
        Politician.createTable( (err) => {
            if(err) View.showError
            else View.showData(`Politician's table has been created!`)
        })
    }

    static seeding(){
        Politician.seeding(function (err) {
            if(err) View.showError(err)
            else View.showData(`Politicians' seeding done`)
        })
    }

    static add(input){
        Politician.add(input, function(err) {
            if(err) View.showError(err)
            else View.showData(`Adding data to Politicians' table successful`)
        })
    }

    static q1(){
        Politician.q1((err, data) => {
            if (err) View.showError(err)
            else View.showData(data)
        })
    }

    static q2(){
        Politician.q2((err, data) => {
            if (err) View.showError(err)
            else View.showData(data)
        })
    }

    static q3(){
        Politician.q3((err, data) => {
            if (err) View.showError(err)
            else View.showData(data)
        })
    }

    static q4(){
        Politician.q4((err, data) => {
            if (err) View.showError(err)
            else View.showData(data)
        })
    }

    static q5(){
        Politician.q5((err, data) => {
            if (err) View.showError(err)
            else View.showData(data)
        })
    }
}

module.exports = PoliticianController