const fs = require('fs')
const pathPolitician = ('./database/politicians.csv')
const pathVoters = ('./database/voters.csv')
const pathVotes = ('./database/votes.csv')
const db = require('../db')

class Seeder {
    static readFile(path) {
        let data = fs.readFileSync(path, 'utf-8')
        return data
    }
    static insertData(tableName, fileName) {
        for (let i = 0; i < fileName.length; i++) {
            let data = fileName[i].split(',')
            console.log(data)
        }



        // for (let i = 1; i < fileName.length; i++) {
        // console.log(fileName[19])
        // let data = dataPolitician[i].split(',')
        // db.run(`INSERT INTO Politicians (name,party,location,grade_current) VALUES ("${data[0]}","${data[1]}","${data[2]}","${data[3]}")`, (err) => {
        //     if (err) throw err
        // })
        // }
        // for (let i = 1; i < dataVoters.length; i++) {
        //     let data = dataVoters[i].split(',')
        //     db.run(`INSERT INTO Voters (first_name,last_name,gender,age) VALUES ("${data[0]}","${data[1]}","${data[2]}","${data[3]}")`, (err) => {
        //         if (err) throw err
        //     })
        // }
        // for (let i = 1; i < dataVotes.length; i++) {
        //     let data = dataVotes[i].split(',')
        //     db.run(`INSERT INTO Votes (voterId,politicianId) VALUES ("${data[0]}","${data[1]}")`, (err) => {
        //         if (err) throw err
        //     })
        // }

    }
}

let dataPolitician = Seeder.readFile(pathPolitician).split('\n'),
    dataVoters = Seeder.readFile(pathVoters).split('\n'),
    dataVotes = Seeder.readFile(pathVotes).split('\n')

Seeder.insertData('Politician', dataPolitician)



module.exports = Seeder


