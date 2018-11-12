const db = require('./dbConnection')

class Release3 {

    static nomor1(party,minGrade,maxGrade,callback) {
        db.all
        (`SELECT * FROM politicians
        WHERE party = "${party}" AND grade_current BETWEEN ${minGrade} AND ${maxGrade};`, function(err,row){
            if(err) callback(err,null)
            else callback(null,row)
        })
    }

    static nomor2(politicianName,callback) {
        db.get
        (`SELECT COUNT(*) as totalVote, politicians.name FROM votes
        LEFT JOIN politicians ON votes.politicianId = politicians.id
        WHERE politicians.name = "${politicianName}"
		GROUP BY politicians.name;`, function(err,row){
            if(err) callback(err,null)
            else callback(null,row);
        })
    }

    static nomor3(condition,callback) {
        db.each
        (`SELECT name, COUNT(*) as totalVote FROM politicians
        LEFT JOIN votes ON politicians.id = votes.politicianId
        WHERE name LIKE "%${condition}%" 
        GROUP BY politicians.name;`, function(err,row) {
            if (err) callback(err,null)
            else callback(null,row);
        })
    }

    static nomor4(callback) {
        db.each
        (`SELECT COUNT(*) as totalVote, politicians.name, politicians.party, politicians.location FROM votes
        LEFT JOIN politicians ON votes.politicianId = politicians.id
        GROUP BY  politicians.name
        ORDER BY totalVote DESC
        LIMIT 3;`,function(err,row){
            if (err) callback(err,null)
            else callback(null,row)
        })
    }

    static nomor5(politicianName,callback) {
        db.all
        (`SELECT first_name,last_name,gender,age FROM voters
        LEFT JOIN votes ON voters.id = votes.voterId
        WHERE votes.politicianId = (SELECT id FROM politicians WHERE name = "${politicianName}");`,function(err,row){
            if (err) callback(err,null)
            else callback(null,row)
        })
    }

}

module.exports = Release3