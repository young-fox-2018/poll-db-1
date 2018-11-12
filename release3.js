const fs = require('fs')
const sqlite3  = require('sqlite3').verbose();
const db       = new sqlite3.Database('./data.db');

function challenge1() {
    const query = `SELECT name, party, grade_current FROM  Candidates WHERE grade_current > 9 AND grade_current < 11;`
    db.all(query, function (err,data) {
        if (err) throw err;
        console.log(data)
    });
}

function challenge2() {
    
    const query = `SELECT COUNT(*) AS "totalVote", name
    FROM Votes JOIN Candidates
    ON  Votes.id_candidates = Candidates.id 
    WHERE Candidates.id = (SELECT id FROM Candidates WHERE name = "Olympia Snowe");`

    db.all(query, function (err,data) {
        if (err) throw err;
        console.log(data)
    });
}

function challenge3() {
    
    const query = `SELECT name, COUNT(*) AS "totalVote" 
    FROM Votes JOIN Candidates
    ON  Votes.id_candidates = Candidates.id 
    WHERE  name LIKE '%adam%' GROUP BY name;`

    db.all(query, function (err,data) {
        if (err) throw err;
        console.log(data)
    });
}

function challenge4() {
    
    const query = `SELECT COUNT(*) AS "totalVote", name, party, location
    FROM Votes JOIN Candidates
    ON  Votes.id_candidates = Candidates.id 
    GROUP BY name
    ORDER BY totalVote DESC
    LIMIT 3;`

    db.all(query, function (err,data) {
        if (err) throw err;
        console.log(data)
    });
}

function challenge5() {
    
    const query = `SELECT name, last_name, gender, age
    FROM Votes JOIN Voters
    ON  Voters.id = Votes.id_voters
    WHERE Votes.id_candidates = (SELECT id FROM Candidates WHERE name = "Olympia Snowe");`

    db.all(query, function (err,data) {
        if (err) throw err;
        console.log(data)
    });
}

challenge1()
challenge2()
challenge3()
challenge4()
challenge5()