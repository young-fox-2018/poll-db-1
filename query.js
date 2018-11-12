const db = require('./db')

db.serialize(function() {

    let soalSatu = 
    `
    SELECT * FROM politicians
    WHERE party = 'R'
        AND grade_current BETWEEN 9 AND 11;
    `
    db.all(soalSatu, function(err, data) {
        if(err) {
            console.log(err);
        } else {
            console.log(data)
        }
    })
    
    let soalDua = 
    `
    SELECT COUNT(*) AS totalVote, name
    FROM votes
    INNER JOIN politicians
        ON votes.politicians_id = politicians.id
    WHERE politicians_id = (
                            SELECT id
                            FROM politicians
                            WHERE name = "Olympia Snowe"
                           );
    `
    db.all(soalDua, function(err, data) {
        if(err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })

    let soalTiga = 
    `
    SELECT name, COUNT(*) AS totalVote 
    FROM politicians
    INNER JOIN votes
        ON politicians.id = votes.politicians_id
    WHERE name LIKE "%Adam%"
    GROUP BY name;
    `
    db.all(soalTiga, function(err, data) {
        if(err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })

    let soalEmpat = 
    `
    SELECT COUNT(*) AS totalVote, name, party, location
    FROM politicians
    INNER JOIN votes
        ON politicians.id = votes.politicians_id
    GROUP BY name
    ORDER BY totalVote DESC
    LIMIT 3;
    `
    db.all(soalEmpat, function(err, data) {
        if(err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })

    let soalLima = 
    `
    SELECT first_name, last_name, gender, age
    FROM voters
    INNER JOIN votes
        ON voters.id = votes.voters_id 
    WHERE politicians_id = (
                            SELECT id
                            FROM politicians
                            WHERE name = "Olympia Snowe"    
                           );
    `
    db.all(soalLima, function(err, data) {
        if(err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })

});