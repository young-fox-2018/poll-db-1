const db = require("./db.js")
const argv = process.argv.slice(2)

if(argv[0] === 'insert'){
    switch (argv[1]) {
        case "politician" : insertpolitician();
            break;
        case "voters" : insertvoters();
            break;
        case "votes" : insertvotes();
            break;
        default: "invalid input cuy"
            break;
    }
}else if(argv[0] === 'update'){
    switch (argv[1]) {
        case "politician": updatepoliticians();
            break;
        case "voters": updatevoters();
            break;
        case "votes": updatevotes();
            break;
        default:"invalid input cuy"
            break;
    }
}else if(argv[0] === 'delete'){
    switch (argv[1]) {
        case "politician": deletepoliticians();
            break;
        case "voters": deletevoters();
            break;
        case "votes": deletevotes();
            break;
        default:"invalid input cuy"
            break;
    }
}

function insertpolitician(){
    const politicianrow = `INSERT INTO politicians (name,party,location,grade_current)
                           VALUES ("${argv[2]}","${argv[3]}","${argv[4]}","${argv[5]}")`
    db.serialize(function(){
        db.run(politicianrow,function(err){
            if(err){
                console.log(err)
            }else{
                console.log(`berhasil insert ke politician`)
            }
        })
    })
}

function insertvoters(){
    const votersrow = `INSERT INTO voters (first_name,last_name,gender,age)
                       VALUES ("${argv[2]}","${argv[3]}","${argv[4]}","${argv[5]}")`

    db.serialize(function(){
        db.run(votersrow,function(err){
            if(err){
                console.log(err)
            }else{
                console.log(`berhasil insert ke voters`)
            }
        })
    })
}

function insertvotes(){
    const votesrow = `INSERT INTO votes (voter_id,politician_id)
        VALUES ("${argv[2]}","${argv[3]}")`

    db.serialize(function(){
        db.run(votesrow,function(err){
            if(err){
                console.log(err)
            }else{
                console.log(`berhasil insert ke votes`)
            }
        })
    })
}

function updatepoliticians(){
    const updated = `UPDATE politicians 
                    SET ${argv[3]} = ${argv[4]}
                    WHERE id = ${argv[2]};`
    db.serialize(function(){
        db.run(updated , function(err){
            if(err){
                console.log(err)
            }else{
                console.log(`update politicians`)
            }
        })
    })
}

function updatevoters(){
    const updated = `UPDATE voters 
                    SET ${argv[3]} = ${argv[4]}
                    WHERE id = ${argv[2]};`
    db.serialize(function(){
        db.run(updated , function(err){
            if(err){
                console.log(err)
            }else{
                console.log(`update voters`)
            }
        })
    })
}

function updatevotes(){
    const updated = `UPDATE votes
                    SET ${argv[3]} = ${argv[4]}
                    WHERE id = ${argv[2]};`
    db.serialize(function(){
        db.run(updated , function(err){
            if(err){
                console.log(err)
            }else{
                console.log(`update votes`)
            }
        })
    })
}

function deletepoliticians(){
    const del = `DELETE FROM politicians
                    WHERE id = ${argv[2]}`
    db.serialize(function(){
        db.run(del , function(err){
            if(err){
                console.log(err)
            }else{
                console.log(`delete politicians`)
            }
        })
    })

}

function deletevoters(){
    const del = `DELETE FROM voters
                    WHERE id = ${argv[2]}`
    db.serialize(function(){
        db.run(del , function(err){
            if(err){
                console.log(err)
            }else{
                console.log(`delete voters`)
            }
        })
    })
}
function deletevotes(){
    const del = `DELETE FROM votes
                    WHERE id = ${argv[2]}`
    db.serialize(function(){
        db.run(del , function(err){
            if(err){
                console.log(err)
            }else{
                console.log(`delete votes`)
            }
        })
    })
}
