const args = process.argv.slice(2);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

//for politician
switch (args[0]) {
    case 'insert':
        insertData(args.slice(1));
        break;
    case 'update':
        updateData(args.slice(1));
        break;
    case 'delete':
        deleteData(args.slice(1));
        break;
    default:
        break;
}

function insertData(input) {
    let insertData = `
    INSERT INTO politicians (name, party, location, grade_current)
    VALUES ("${input[0]}", "${input[1]}", "${input[2]}", "${input[3]}");`;
    db.run(insertData, function (err) {
        if (err) {
            console.log({message: 'insertNew politician err'});
        }
        else {
            console.log("inserted");
        }
    })
}

function updateData(input) {
    let updateData = `
    UPDATE politicians
    SET name = "${input[0]}",
        party = "${input[1]}",
        location = "${input[2]}",
        grade_current = "${input[3]}"
    WHERE id = ${input[4]};`;
    db.run(updateData, function (err) {
        if (err) {
            console.log({message: 'updateNew politician err', err: err});
        }
        else {
            console.log("updated");
        }
    })
}

function deleteData(input) {
    let deleteData = `
    DELETE FROM politicians
    WHERE id = ${input[0]};`;
    db.run(deleteData, function (err) {
        if (err) {
            console.log({message: 'delete politician err', err: err});
        }
        else {
            console.log("deleted");
        }
    })
}