const fs = require("fs")
const db = require("../database/connection")

class Model {
    static readFile(path) {
        let data = fs.readFileSync(path, "utf-8")
        return data
    }

    static insert(table, columns, data) {
        db.run(
            `INSERT INTO ${table}(${columns})VALUES (${data})`,
            (err) => {
                if (err) console.log(err.message)
            }
        )
    }

    static insertData(table, columns, data, callback) {
        db.run(
            `INSERT INTO ${table}(${columns})VALUES (${data})`,
            (err) => {
                if (err) callback(err)
                else callback(null, null)
            }
        )

    }
    static update(table, parameter, updateData, id, callback) {
        db.run(`UPDATE  ${table} SET ${parameter} = "${updateData}" WHERE id = ${id}`, (err) => {
            if (err) callback(err)
            else callback(null, null)
        });
    }
    static delete(table, id, callback) {
        db.run(`DELETE FROM ${table} WHERE id = ${id}`, (err) => {
            if (err) callback(err)
            else callback(null, null)
        });
    }
}

module.exports = Model