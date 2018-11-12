const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./poll.db');

db.serialize(function() {
    const query1 = `SELECT name, party, grade_current 
                    FROM politicians 
                    WHERE party = 'R' 
                    AND grade_current BETWEEN 9 AND 11`;

    db.all(query1, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });

    const query2 = `SELECT COUNT(votes.id) AS totalVote, politicians.name 
                    FROM votes
                    JOIN politicians ON politicians.id = votes.politicianId 
                    WHERE politicians.name = 'Olympia Snowe'`;
    
    db.all(query2, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });

    const query3 = `SELECT name, COUNT(votes.voterId) AS totalVote 
                    FROM politicians
                    JOIN votes ON politicians.id = votes.politicianId
                    WHERE politicians.name LIKE '%Adam%' 
                    GROUP BY politicians.name`;

    db.all(query3, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });

    const query4 = `SELECT count(votes.id) as totalVote, name, party, location 
                    FROM votes 
                    JOIN politicians ON votes.politicianId = politicians.id 
                    GROUP BY politicianId 
                    ORDER BY totalVote DESC LIMIT 3`;

    db.all(query4, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });

    const query5 = `SELECT first_name, last_name, gender, age 
                    FROM voters 
                    JOIN votes ON voters.id = votes.voterId 
                    WHERE politicianId = (
                                            SELECT id from politicians 
                                            WHERE name = 'Olympia Snowe'
                                        )`;

    db.all(query5, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
});