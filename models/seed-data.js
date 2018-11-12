const sqlite3 = require("sqlite3").verbose()
const fs = require('fs')
let db = new sqlite3.Database("../pollDb.db")

let politicians = fs.readFileSync('../politicians.csv', 'utf8').split('\n')
let voters = fs.readFileSync('../voters.csv', 'utf8').split('\n')
let votes = fs.readFileSync('../votes.csv', 'utf8').split('\n')
//console.log(politicians)
// politicians.forEach((arr, index) => {
//     politicians[index] = politicians[index].split(',')
// })
//console.log(politicians)
db.serialize(() => {
    for (let i = 1; i < politicians.length-1; i++) {
        politicians[i] = politicians[i].split(',')
        db.run((`
        INSERT INTO politicians (name, party, location, grade_current)
        VALUES ("${politicians[i][0]}", "${politicians[i][1]}", "${politicians[i][2]}", "${politicians[i][3]}")
        `), err => {
            if (err) console.log(`error => ${err}`)
            else {'masuk pak eko'}
        })
    }
    for (let i = 1; i < voters.length-1; i++) {
        voters[i] = voters[i].split(',')
        db.run((`
        INSERT INTO voters (first_name,last_name,gender,age)
        VALUES ("${voters[i][0]}", "${voters[i][1]}", "${voters[i][2]}", "${voters[i][3]}")
        `), err => {
            if (err) console.log(`error => ${err}`)
            else {'masuk pak eko'}
        })
    }
    for (let i = 1; i < votes.length-1; i++) {
        votes[i] = votes[i].split(',')
        db.run((`
        INSERT INTO votes (voterId, politicianId)
        VALUES ("${votes[i][0]}", "${votes[i][1]}")
        `), err => {
            if (err) console.log(`error => ${err}`)
            else {'masuk pak eko'}
        })
    }

})
db.close()