const sqlite3 = require("sqlite3").verbose()
let db = new sqlite3.Database("../pollDb.db")

class Politician {
    static create(input) {
        //console.log(input)
        let query = `INSERT INTO politicians (name, party, location, grade_current)
            VALUES("${input.name}", "${input.party}", "${input.location}", "${input.grade_current}")`
        db.serialize(() => {
            db.run(query, err=> {
                if (err) throw err
                else console.log('data has been added')
            })
        })
        db.close()
    }
    static update(input) {
        let query = `UPDATE politicians
                        SET name = "${input.name}",
                            party = "${input.party}",
                            location = "${input.location}",
                            grade_current = "${input.grade_current}"
                        WHERE id = ${input.id}`
        db.serialize(() => {
            db.run(query, err=> {
                if (err) throw err
                else console.log('data has been added')
            })
        })
        db.close()
    }
    static delete(input) {
        let query = `DELETE FROM politicians WHERE id = ${input}`
        db.serialize(() => {
            db.run(query, err=> {
                if (err) throw err
                else console.log('data has been added')
            })
        })
        db.close()
    }
}

module.exports = Politician