const sqlite3  = require('sqlite3').verbose();
const db       = new sqlite3.Database('./database.db');

//RELEASE 3

//NO 1,2,3
let query1 = `SELECT * FROM Candidate WHERE nama_partai = "R" AND grade_current >= 9 AND grade_current <= 11 ORDER BY nama_pejabat`
// let query2 = `SELECT COUNT(*) AS TotalVote, Candidate.nama_pejabat FROM Voting JOIN Candidate ON Voting.id_pejabat = Candidate.id WHERE id_pejabat = (
//     SELECT Id FROM Candidate WHERE nama_pejabat = "Olympia Snowe"
// )`

let query2 = `SELECT Candidate.nama_pejabat, COUNT(Voting.id_pejabat) AS TotalVote 
FROM Candidate JOIN Voting ON Candidate.Id = Voting.id_pejabat WHERE Candidate.nama_pejabat LIKE "%Adam%"
GROUP BY id_pejabat
`

let query3 = `SELECT COUNT(Voting.id_pejabat) AS TotalVote, Candidate.nama_pejabat, Candidate.nama_partai, Candidate.location FROM Voting JOIN Candidate ON Voting.id_pejabat = Candidate.id GROUP BY Voting.Id_pejabat ORDER BY TotalVote DESC LIMIT 3`
let query4 = `SELECT * FROM Voters JOIN Voting ON Voting.id_pejabat = Voters.Id WHERE Voting.id_pejabat = (
    SELECT Id FROM Candidate WHERE Candidate.nama_pejabat = "Olympia Snowe")`

let query5 = `SELECT first_name, last_name, gender, age FROM Voters JOIN Voting ON Voters.Id = Voting.id_voters WHERE Voting.id_pejabat = (
    SELECT Id FROM Candidate WHERE Candidate.nama_pejabat = "Olympia Snowe")`


// db.serialize(function() {
//     db.all(query1,function(err, rows) {
//         if (err) {
//             throw err
//         }
//         console.log(rows);
        
//     })
// })

// db.serialize(function() {
//     db.all(query2,function(err, rows) {
//         if (err) {
//             throw err
//         }
//         console.log(rows);
        
//     })
// })

db.serialize(function() {
    db.all(query4,function(err, rows) {
        if (err) {
            throw err
        }
        console.log(rows);
        
    })
})