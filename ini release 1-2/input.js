const db    = require('./voterdb.js');
let argv = process.argv
argv = argv.slice(2)
const dbName = argv[0]
const info = argv.slice(1)

if(dbName === "addVoter"){
    const addVoter = `INSERT INTO voters (first_name, last_name, gender, age)
        VALUES ("${info[0]}", "${info[1]}", "${info[2]}", "${info[3]}")`
    db.run(addVoter,function(err){
        if(err){
            console.log("ERR addVoter: ", err)
        }
        else{
            console.log(`Voter ${info[0]} berhasil ditambahkan`)
        }
    })
}
else if(dbName === "addPolitician"){
    const addPoli = `INSERT INTO politicians (name, party, location, grade_current)
                    VALUES ("${info[0]}", "${info[1]}", "${info[2]}", "${info[3]}")`
    db.run(addPoli,function(err){
        if(err){
            console.log("ERR addPoli: ", err)
        }
        else{
            console.log(`Politician ${info[0]} berhasil ditambahkan`)
        }
    })
}
else if(dbName === "addVote"){
    const addVote = `INSERT INTO votes (voterId, politicianId)
                    VALUES ("${info[0]}", "${info[1]}")`
    db.run(addVote,function(err){
        if(err){
            console.log("ERR addVote: ", err)
        }
        else{
            console.log(`Vote berhasil ditambahkan`)
        }
    })
}
else if(dbName === "delVoter"){
    const delVoter = `DELETE
                     FROM voters
                     WHERE
                        first_name = "${info[0]}";`
    db.run(delVoter, function(err){
        if(err){
            console.log("ERR delVoter: ", err)
        }
        else{
            console.log(`Voter telah dihapus!`)
        }
    })
}
else if(dbName === "delVote"){
    const delVote = `DELETE
                     FROM votes
                     WHERE
                        voterId = "${info[0]}";`
    db.run(delVote, function(err){
        if(err){
            console.log("ERR delVote: ", err)
        }
        else{
            console.log(`Vote telah dihapus!`)
        }
    })
}
else if(dbName === "delPolitician"){
    const delPolitician = `DELETE
                          FROM politicians
                          WHERE
                            name = "${info[0]}";`
    db.run(delPolitician, function(err){
        if(err){
            console.log("ERR delPolitician: ", err)
        }
        else{
            console.log(`Politician ${info[0]} telah dihapus!`)
        }
    })
}
else if (dbName === "updVoter"){
    const updVoter = `UPDATE voters
                     SET first_name = "${info[1]}",
                     WHERE voterId  = "${info[0]}"`
    db.run(updVoter, function(err){
        if(err){
            console.log("ERR updVoter: ",err)
        }
        else{
            console.log(`Update voter id ${argv[0]} berhasil`)
        }
    })
}