const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db');

//Release 3

//Nomor 1
let politicians_R_grade = `
  SELECT name, party, grade_current FROM politicians
  WHERE party = "R" AND grade_current >= 9 AND grade_current <= 11`

//Nomor 2
let olympiaSnoweVotes = `
  SELECT COUNT (*) AS totalVote, politicians.name FROM votes
  JOIN politicians ON votes.politicianId = politicians.politician_id
  WHERE politicianId = (
                          SELECT politician_id
                          FROM politicians
                          WHERE name = "Olympia Snowe"
)`

//Nomor 3
let adamvotes = `
  SELECT politicians.name, COUNT (votes.politicianId) AS totalVote FROM politicians
  JOIN votes ON politicians.politician_id = votes.politicianId
  WHERE name LIKE "%Adam%" GROUP BY politicianId `

//Nomor 4
let bestpoliticians = `
  SELECT COUNT (votes.politicianId) AS totalVote, name, party, location FROM votes
  JOIN politicians ON votes.politicianId = politicians.politician_id
  GROUP by politicianId ORDER BY totalVote DESC LIMIT 3`

let olympiaSnoweVoters = `
  SELECT first_name, last_name, gender, age FROM voters JOIN votes ON voters.voter_id = votes.voterId
  WHERE politicianId = (
                          SELECT politician_id
                          FROM politicians
                          WHERE name = "Olympia Snowe"
)`

db.serialize(function() {
  db.all(politicians_R_grade, function(err, rows) {
    if (err) {
      throw err
    }
    console.log(rows);
  })

  db.all(olympiaSnoweVotes, function(err, rows) {
    if (err) {
      throw err
    }
    console.log(rows);
  })

  db.all(adamvotes, function(err, rows) {
    if (err) {
      throw err
    }
    console.log(rows);
  })

  db.all(bestpoliticians, function(err, rows) {
    if (err) {
      throw err
    }
    console.log(rows);
  })
  
  db.all(olympiaSnoweVoters, function(err, rows) {
    if (err) {
      throw err
    }
    console.log(rows);
  })
})