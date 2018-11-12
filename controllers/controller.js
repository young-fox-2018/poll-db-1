const Seeder = require("../models/seed-data")
const Politician = require("../models/politician")
const Voter = require("../models/voters")
const Vote = require("../models/votes")
const Views = require("../views/view")
class Controller {
    static seeder() {
        Seeder.data()
        Views.displayData("Data berhasil di seeder")
    }
    static add(table, data) {
        if (table === "politician") {
            Politician.addData(data, (err, data) => {
                if (err) Views.displayErr(err)
                else Views.displayData("Data politician berhasil disimpan")
            })
        }
        else if (table === "voter") {
            Voter.addData(data, (err, data) => {
                if (err) Views.displayErr(err)
                else Views.displayData("Data Voters berhasil disimpan")
            })
        }
        else if (table === "vote") {
            Vote.addData(data, (err, data) => {
                if (err) Views.displayErr(err)
                else Views.displayData("Data Votes berhasil disimpan")
            })
        }
    }
    static update(table, parameter, updateData, id) {
        if (table === "politician") {
            Politician.updateData(parameter, updateData, id, (err, data) => {
                if (err) Views.displayErr(err)
                else Views.displayData("Data politician berhasil disimpan")
            })
        }
        else if (table === "voter") {
            Voter.updateData(parameter, updateData, id, (err, data) => {
                if (err) Views.displayErr(err)
                else Views.displayData("Data Voter berhasil disimpan")
            })
        }
        else if (table === "vote") {
            Vote.updateData(parameter, updateData, id, (err, data) => {
                if (err) Views.displayErr(err)
                else Views.displayData("Data Vote berhasil disimpan")
            })
        }

    }


    static delete(table, id) {
        if (table === "politician") {
            Politician.deleteData(id, (err, data) => {
                if (err) Views.displayErr(err)
                else Views.displayData("Data politician berhasil di delete")
            })
        }
        else if (table === "voter") {
            Voter.deleteData(id, (err, data) => {
                if (err) Views.displayErr(err)
                else Views.displayData("Data voter berhasil di delete")
            })
        }
        else if (table === "vote") {
            Vote.deleteData(id, (err, data) => {
                if (err) Views.displayErr(err)
                else Views.displayData("Data vote berhasil di delete")
            })
        }
    }


}

module.exports = Controller