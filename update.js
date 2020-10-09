const fs = require("fs")
const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

const argv = process.argv.slice(2)


// name,party,location,grade_current
// first_name,last_name,gender,age
function run(input){
    db.run(input, function(err){
        if(err){
            console.log("Err:", err)
        }
    })
}

var query
switch (argv[0]) {
    case "insert":
        if(argv[1] === 'politician'){
            query = `INSERT INTO Politicians(name,party,location,grade_current) 
            VALUES ("${argv[2]}", "${argv[3]}", "${argv[4]}", "${argv[5]}");`
        } else if(argv[1] === 'voter'){
            query = `INSERT INTO Voters(first_name,last_name,gender,age) 
                VALUES ("${argv[2]}", "${argv[3]}", "${argv[4]}", "${argv[5]}");`
        } else if(argv[1] === 'votes'){
            query = `INSERT INTO Votes(voterId,politicianId) 
                VALUES ("${argv[2]}", "${argv[3]}");`
        }
        run(query) 
        break;
    case "update":
        if(argv[1] === 'politician'){
            query = `UPDATE Politicians
            SET name ='${argv[3]}',
                party ='${argv[4]}',
                location ='${argv[5]}',
                grade_current = '${argv[6]}'
            WHERE id=${argv[2]};`
        } else if(argv[1] === 'voter'){
            query = `UPDATE Voters
            SET first_name ='${argv[3]}',
                last_name ='${argv[4]}',
                gender ='${argv[5]}',
                age = '${argv[6]}'
            WHERE id=${argv[2]};`
        }
        run(query)
        break;
    case "delete":
        if(argv[1] === 'politician'){
            query = `DELETE FROM Politicians WHERE id=${argv[2]};`;
        } else if(argv[1] === 'voter'){
            query = `DELETE FROM Voters WHERE id=${argv[2]};`;
        }
        run(query)
        break;
    default:
        console.log("you can : insert, delete, update Tables")
        break;
}