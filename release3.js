const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

//=============================== NOMOR 1===============================//
// let query = `SELECT name,party,grade_current FROM Politicians 
//             WHERE party = 'R' AND grade_current BETWEEN 9 AND 11`
// db.all(query, function(err,data){
//     if(err){
//         console.log("Err:", err)
//     } else {
//         console.log(data)
//     }
// })

//=============================== NOMOR 2 ===============================//
// let query = `SELECT COUNT(name) AS totalVote,name
//             FROM Votes
//             INNER JOIN Politicians ON Votes.politicianId = Politicians.id
//             WHERE politicianId = (SELECT id FROM Politicians 
//                                     WHERE name = 'Olympia Snowe')`
// db.all(query, function(err,data){
//     if(err){
//         console.log("Err:", err)
//     } else {
//         console.log(data)
//     }
// })     


//=============================== NOMOR 3 ===============================//
// let query = `SELECT name,COUNT(name) AS totalVote
//             FROM Votes
//             INNER JOIN Politicians ON Votes.politicianId = Politicians.id
//             WHERE name LIKE '%Adam%'
//             GROUP BY name`
// db.all(query, function(err,data){
//     if(err){
//         console.log("Err:", err)
//     } else {
//         console.log(data)
//     }
// })



//=============================== NOMOR 4 ===============================//
// let query = `SELECT COUNT(voterId) AS totalVote, name, party, location
//             FROM Votes INNER JOIN Politicians ON Votes.politicianId = Politicians.id
//             GROUP BY name
//             ORDER BY totalVote DESC
//             LIMIT 3
//             `
// db.all(query, function(err,data){
//     if(err){
//         console.log("Err:", err)
//     } else {
//         console.log(data)
//     }
// })


//=============================== NOMOR 5 ===============================//
// let query = `SELECT first_name, last_name, gender, age
//             FROM ((Votes 
//             INNER JOIN Politicians ON Votes.politicianId = Politicians.id)
//             INNER JOIN Voters ON Votes.voterId = Voters.id)
//             WHERE name = 'Olympia Snowe'
//             `

// db.all(query, function(err,data){
//     if(err){
//         console.log("Err:", err)
//     } else {
//         console.log(data)
//     }
// })