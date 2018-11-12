const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

// 1.
let soal1 = `
SELECT name, party, grade_current
FROM politicians
WHERE party = 'R' AND
    grade_current >= 9 AND grade_current <= 11;`
// db.all(soal1, function(err, rows) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(rows);
//     }
// })

// 2.
let soal2 = `
SELECT COUNT(politicianId) AS totalVote, name
FROM votes
INNER JOIN politicians ON votes.politicianId = politicians.id
WHERE politicians.id = (
                        SELECT id
                        FROM politicians
                        WHERE name = "Olympia Snowe"
                        )`
// db.all(soal2, function(err, rows) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(rows);
//     }
// })

// 3.
let soal3 = `
SELECT name, COUNT(politicianId) AS totalVote
FROM votes
INNER JOIN politicians ON votes.politicianId = politicians.id
WHERE politicians.name LIKE "Adam %"
GROUP BY name;`
// db.all(soal3, function(err, rows) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(rows);
//     }
// })

// 4.
let soal4 = `
SELECT COUNT(politicianId) AS totalVote, name, party, location
FROM votes
INNER JOIN politicians ON votes.politicianId = politicians.id
GROUP BY name
ORDER BY totalVote DESC
LIMIT 3;`
// db.all(soal4, function(err, rows) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(rows);
//     }
// })

// 5.
let soal5 = `
SELECT first_name, last_name, gender, age
FROM voters
INNER JOIN votes ON voters.id = votes.voterId
WHERE votes.politicianId = (
                            SELECT id
                            FROM politicians
                            WHERE name = "Olympia Snowe"
                            );`

db.all(soal5, function(err, rows) {
    if (err) {
        console.log(err);
    } else {
        console.log(rows);
    }
})