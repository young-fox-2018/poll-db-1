const db = require("./connectDB")
const fs = require("fs")
const politicians = fs.readFileSync("../politicians.csv", "utf-8").split("\n")
const voters = fs.readFileSync("../voters.csv", "utf-8").split("\n")
const votes = fs.readFileSync("../votes.csv", "utf-8").split("\n")

// Seed politicians data ?? kok masih g sesuai urutan
for (let i = 1; i < politicians.length-1; i++) {
    let current = politicians[i].split(",")
    let seedQueryPoliticians = `INSERT INTO Politicians (name, party, location, grade_current) 
                                VALUES ("${current[0]}", "${current[1]}", "${current[2]}", "${current[3]}");`

    db.serialize(function() {
        db.run(seedQueryPoliticians, function(err) {
            if (err) throw err
            console.log('Successfully seed politicians data')
        })
    })
}

// Seed voters data
for (let i = 1; i < voters.length-1; i++) {
    let current = voters[i].split(",")
    let seedQueryVoters = `INSERT INTO Voters (first_name, last_name, gender, age)
                           VALUES ("${current[0]}", "${current[1]}", "${current[2]}", "${current[3]}");`
    db.serialize(function() {
        db.run(seedQueryVoters, function(err) {
            if (err) throw err
            console.log("Successfully seed voters data")
        })
    })
}

// Seed votes data
for (let i = 0; i < votes.length-1; i++) {
    let current = votes[i].split(",")
    let seedQueryVotes = `INSERT INTO Votes (politician_id, voter_id)
                          VALUES ("${current[1]}","${current[0]}");`

    db.serialize(function() {
        db.run(seedQueryVotes, function(err) {
            if (err) throw err
            console.log("Successfully seed votes data")
        })
    })
}

db.close()

