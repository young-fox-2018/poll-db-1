let Politician = require('../models/politicians')

class PoliticianController {
    static create(input) {
        let obj = {
            name: input[0],
            party: input[1],
            location: input[2],
            grade_current: input[3]
        }
        Politician.create(obj)
    }
}

module.exports = PoliticianController