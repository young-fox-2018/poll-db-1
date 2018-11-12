const fs = require('fs');
const db    = require('./voterdb.js');

db.serialize(function(){

    const voters = fs.readFile('./voters.csv',"utf8",function(err,data){
        if(err){
            console.log("ERR voters: ", err)
        }
        else{
            data = data.split("\n")
            data.forEach(function(person,i){
                if(i >= 1){
                    person = person.split(",")
                    const add = `INSERT INTO voters (first_name, last_name, gender, age)
                                VALUES ("${person[0]}", "${person[1]}", "${person[2]}", "${person[3]}")`
                                // console.log(add)
                    db.run(add,function(err){
                        if(err){
                            console.log("ERR: ", err)      
                        }
                        else{
                            console.log("data berhasil ditambahkan kedalam voters!")
                        }
                    })
                }
            })
        }
    })
    
    const votesDb = fs.readFile('./votes.csv',"utf8",function(err,data){
        if(err){
            console.log("ERR in votesDB: ", err)
        }
        else{
            data = data.split("\n")
            data.forEach(function(vote,i){
                if(i >= 1){
                    vote = vote.split(",")
                    const add = `INSERT INTO votes (voterId, politicianId)
                                VALUES ("${vote[0]}", "${vote[1]}")`
                    db.run(add,function(err){
                        if(err){
                            console.log("ERR votesDb: ", err)      
                        }
                        else{
                            console.log("data berhasil ditambahkan kedalam votes!")
                        }
                    })
                }
            })
        }
    })
    
    const candidates = fs.readFile('./politicians.csv', "utf8", function(err,data){
        if(err){
            console.log(err)
        }
        else{
            data = data.split("\n")
            data.forEach(function(candidates,i){
                if(i >= 1){
                    cand = candidates.split(",")
                    // console.log(cand,"=========")
                    const addCand = `INSERT INTO politicians (name, party, location, grade_current)
                    VALUES ("${cand[0]}", "${cand[1]}", "${cand[2]}", "${cand[3]}")`
                    db.run(addCand, function(err){
                        if(err){
                            console.log("ERR candidates: ", err)
                        }
                        else{
                            console.log("data berhasil ditambahkan ke dalam candidates!")
                        }
                    })
                }
            })
        }
    })

})
