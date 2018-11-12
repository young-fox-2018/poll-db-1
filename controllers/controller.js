const { Setup } = require('../models/setup')
const SeedData = require('../models/seed-data')
const View = require('../views/view')

class Controller {
    static Setup() {
        Setup.init()
        View.Setup()
    }

    static seedDataPoliticians() {
        SeedData.seedDataPoliticians(function (err) {
            if (err) View.displayError(err)
            else View.seedDataPoliticians()
        })
    }

    static seedDataVoters() {
        SeedData.seedDataVoters(function (err) {
            if (err) View.displayError(err)
            else View.seedDataVoters()
        })
    }

    static seedDataVotes() {
        SeedData.seedDataVotes(function (err) {
            if (err) View.displayError(err)
            else View.seedDataVotes()
        })
    }

    static insertDataPolitician(name, party, location, grade_current) {
        SeedData.insertDataPolitician(name, party, location, grade_current, function(err) {
            if (err) View.displayError(err)
            else View.insertDataPolitician(name, party, location, grade_current)
        })
    }

    static insertDataVoter(first_name, last_name, gender, age) {
        SeedData.insertDataVoter(first_name, last_name, gender, age, function(err) {
            if (err) View.displayError(err)
            else View.insertDataVoter(first_name, last_name, gender, age)
        })
    }

    static insertDataVote(voterId, politicianId) {
        SeedData.insertDataVote(voterId, politicianId, function(err) {
            if (err) View.displayError(err)
            else View.insertDataVote(voterId, politicianId)
        })
    }

    static updateData(id, table, field, newValue) {
        SeedData.updateData(id, table, field, newValue, function(err) {
            if (err) View.displayError(err)
            else View.updateData(id, table, field, newValue)
        })
    }

    static deleteTableData(id, table) {
        SeedData.deleteTableData(id, table, function(err) {
            if (err) View.displayError(err)
            else View.deleteTableData(id, table)
        })
    }

    static showRange(party, min, max) {
        SeedData.showRange(party, min, max, function(err, data) {
            if (err) View.displayError(err)
            else View.displayData(data)
        })
    }

    static voteCount(name) {
        SeedData.voteCount(name, function(err, data) {
            if (err) View.displayError(err)
            else View.displayData(data)
        })
    }

    static countContains(name) {
        SeedData.countContains(name, function(err, data) {
            if (err) View.displayError(err)
            else View.displayData(data)
        })
    }

    static bestThreePoliticians() {
        SeedData.bestThreePoliticians(function(err, data) {
            if (err) View.displayError(err)
            else View.displayData(data)
        })
    }

    static politicianVoters(name) {
        SeedData.politicianVoters(name, function(err, data) {
            if (err) View.displayError(err)
            else View.displayData(data)
        })
    }
}

module.exports = Controller