//your code here
const db = require('./db')


db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS Politicians (
        id INTEGER PRIMARY KEY,
        name TEXT,
        party TEXT,
        grade_current INTEGER
    )`, (err) => {
            if (err) {
                console.log(err)
            }
        })
    db.run(`CREATE TABLE IF NOT EXISTS Voters (
        id INTEGER PRIMARY KEY,
        first_name TEXT,
        last_name TEXT,
        gender TEXT,
        age INTEGER
    )`, (err) => {
            if (err) {
                console.log(err)
            }
        })
    db.run(`CREATE TABLE IF NOT EXISTS Votes (
        id INTEGER PRIMARY KEY,
        voterId INTEGER NOT NULL,
        politicianId INTEGER NOT NULL,
            FOREIGN KEY (voterId) REFERENCES Voters (id)
            FOREIGN KEY (politicianId) REFERENCES Politicians (id)
    )`, (err) => {
            if (err) {
                console.log(err)
            }
        })
})
db.close()



module.exports = db