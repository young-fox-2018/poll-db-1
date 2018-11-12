
const db = require("./db.js");

//RELEASE 3 part: 1
let selectPoliticians = `SELECT name, 
                         party, grade_current FROM politicians WHERE party = "R"
                         AND grade_current >= 9 AND grade_current < 11`
db.all(selectPoliticians, function(err, politicians) {
    if(err) throw err;
    console.log(politicians);
})

//RELEASE 3 part 2:
let selectQuery = `SELECT 
                   (SELECT COUNT(votes.politiciansId) FROM votes WHERE votes.politiciansId = (
                    SELECT politicians.politicians_id
                    FROM politicians
                    WHERE politicians.name = "Olympia Snowe"
                   )) AS totalVote,
                   politicians.name FROM votes
                   JOIN politicians ON votes.votersId = politicians.politicians_id 
                   WHERE politicians.name = 'Olympia Snowe'`

db.all(selectQuery, function(err, politicians) {
    if(err) console.log( err )
    console.log(politicians)
})

//REALEASE 3 part 3:

let selectQueryName = `SELECT name, COUNT(votes.politiciansId) AS totalVotes FROM politicians
                       INNER JOIN votes ON politicians.politicians_id = votes.politiciansId
                       GROUP BY name
                       HAVING name LIKE "Adam%"`
db.all(selectQueryName, function(err, names) {
    if(err) console.log(err)
    console.log(names)
})

//RELEASE 3 part 4:
let selectQueryMax = `SELECT Count(votes.politiciansId) as totalVote, name, party, location FROM politicians 
                      INNER JOIN votes ON politicians.politicians_id = votes.politiciansId 
                      GROUP BY name 
                      ORDER BY totalVote DESC
                      LIMIT 3`
db.all(selectQueryMax, function(err, groupByName){
    if(err) console.log(err)
    console.log(groupByName)
})

//RELEASE 3 part 5:
let olympiaVoters = `SELECT first_name, last_name, gender, age FROM voters JOIN votes ON voters.voters_id = votes.votersId
                     WHERE politiciansId = (
                         SELECT politicians_id
                         FROM politicians
                         WHERE name = "Olympia Snowe"
                     );`
db.all(olympiaVoters, function(err, data){
    if(err) console.log(err)
    console.log(data)
})