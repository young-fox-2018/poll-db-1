
const Politician = "./database/politicians.csv"
const Voter = "./database/voters.csv"
const Votes = "./database/votes.csv"
const Model = require("./model")

class Seeder extends Model {
    constructor() {
        super()
    }
    static data() {
        let dataPolitician = Seeder.readFile(Politician).split(`\n`)
        let dataVoter = Seeder.readFile(Voter).split(`\n`)
        let dataVote = Seeder.readFile(Votes).split(`\n`)

        Seeder.seedData("Politicians", dataPolitician)
        Seeder.seedData("Voters", dataVoter)
        Seeder.seedData("Votes", dataVote)
    }

    static seedData(param, dataTable) {

        for (let i = 1; i < dataTable.length; i++) {
            let newData = dataTable[i].split(",")
            let data = ""
            for (let j = 0; j < newData.length; j++) {
                if (j === newData.length - 1) {
                    data += `"${newData[j]}"`
                }
                else {
                    data += `"${newData[j]}",`
                }
            }
            Seeder.insert(`${param}`, dataTable[0], data)
        }
    }

}
module.exports = Seeder

