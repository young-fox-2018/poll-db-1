const db = require("./connectDB")

class Model {
    static run(query) {
        db.run(query, function(err) {
            if (err) throw err
            console.log("Sucessfully running")
        })
    }

    // first name, last name, gender, age: Voters
    // name, party, location, grade_current: Politicians
    // politiciand_id, voter_id: Votes
    static insert(table, values) {
        let insertQuery = null
        if (table == "Politicians") {
            insertQuery = `INSERT INTO Politicians (name, party, location, grade_current) 
            VALUES ("${values[0]}","${values[1]}","${values[2]}","${values[3]})";`
        } else if (table == "Voters") {
            insertQuery = `INSERT INTO Voters (first_name, last_name, gender, age) 
                               VALUES ("${values[0]}","${values[1]}","${values[2]}","${values[3]}");`
        } else if (table == "Votes") {
            insertQuery = `INSERT INTO Votes (politician_id, voter_id) 
                               VALUES ("${values[0]}","${values[1]}");`
        }
        Model.run(insertQuery)
        db.close()
    }

    // update
    static update(table, id, values) {
        let updateQuery = null
        if (table == "Politicians") {
             updateQuery = `UPDATE Politicians 
                               SET name = ${values[0]}, party = ${values[1]}, location = ${values[2]}, grade_current = ${values[3]}
                               WHERE id = ${id};`
        } else if (table == "Voters") {
             updateQuery = `UPDATE Voters 
                               SET first_name = "${values[0]}", last_name = "${values[1]}", gender = "${values[2]}" ,age = "${values[3]}"
                               WHERE id = ${id};`
        } else if (table == "Votes") {
             updateQuery = `UPDATE Votes 
                               SET politician_id = ${values[0]}, voter_id = ${values[1]} 
                               WHERE id = ${id}`
        }
        Model.run(updateQuery)
        db.close()
    }

    // delete
    static delete(table, id) {
            let deleteQuery = null
            if (table == "Politicians") {
                deleteQuery = `DELETE FROM Politicians WHERE id = ${id}`
            } else if (table == "Voters") {
                deleteQuery = `DELETE FROM Voters WHERE id = ${id}`
            } else if (table == "Votes") {
                deleteQuery = `DELETE FROM Votes WHERE id = ${id}`
            }
            Model.run(deleteQuery)
            db.close()
    }
}

//Model.insert("Voters", ["Imanuel", "Vicky", "Male", 22])
//Model.update("Voters", 151, ["Emanuella", "Victoria", "Female", 22])
// Model.delete("Voters", 151)

module.exports = Model