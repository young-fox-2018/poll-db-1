const db = require('./db')
const argv = process.argv.slice(2)
const command = argv[0]
const option = argv.slice(1)

function insertPoliticians(name, party, location, grade_current) {
    db.serialize(function() {
        let data = 
        `
        INSERT INTO politicians
            (name, party, location, grade_current)
        VALUES
            ("${name}", "${party}", "${location}", "${grade_current}")
        `

        db.run(data, function(err) {
            if(err) {
                console.log(err)
            } else {
                console.log(`berhasil menambahkan data pada table politicians`)
            }
        })
    });
}

function insertVoters(firstName, lastName, gender, age) {
    db.serialize(function() {
        let data = 
        `
        INSERT INTO voters
            (first_name, last_name, gender, age)
        VALUES
            ("${firstName}", "${lastName}", "${gender}", "${age}")
        `

        db.run(data, function(err) {
            if(err) {
                console.log(err)
            } else {
                console.log(`berhasil menambahkan data pada table voters`)
            }
        })
    });
}

function insertVotes(voterId, politicianId) {
    db.serialize(function() {
        let data = 
        `
        INSERT INTO votes
            (voters_id, politicians_id)
        VALUES
            (${voterId}, ${politicianId})
        `

        db.run(data, function(err) {
            if(err) {
                console.log(err)
            } else {
                console.log(`berhasil menambahkan data pada table votes`)
            }
        })
    });
}

function updatePoliticians(id, name, party, location, grade_current) {
    db.serialize(function() {
        let update =
        `
        UPDATE politicians SET
            name = "${name}",
            party = "${party}",
            location = "${location}",
            grade_current = "${grade_current}"
        WHERE id = ${id}
        `

        db.run(update, function(err) {
            if(err) {
                console.log(err)
            } else {
                console.log(`berhasil update`)
            }
        })
    });
}

function deletePoliticians(id) {
    db.serialize(function() {
        let deleteItem = 
        `
        DELETE FROM politicians
        WHERE id = ${id}
        `

        db.run(deleteItem, function(err) {
            if(err) {
                console.log(err)
            } else {
                console.log(`berhasi delete`)
            }
        })
    });
}



switch (command) {
    case 'insertData':
        if(option[0] === 'politicians') {
            insertPoliticians(option[1], option[2], option[3], option[4])
        } else if(option[0] === 'voters') {
            insertVoters(option[1], option[2], option[3], option[4])
        } else if(option[0] === 'votes') {
            insertVotes(option[1], option[2])
        }
        break;
    
    case 'update':
        if(option[0] === 'politicians') {
            updatePoliticians(option[1], option[2], option[3], option[4], option[5])
        } 
        break;

    case 'delete':
        deletePoliticians(option[1])

    default:
        break;
}
