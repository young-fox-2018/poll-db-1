const sqlite3 = require('sqlite3').verbose(),
    db = new sqlite3.Database('./database.db')
// name,party,location,grade_current
db.serialize(() => {
    db.run(

        `CREATE TABLE IF NOT EXISTS Politicians 
            ( id INTEGER PRIMARY KEY AUTOINCREMENT, 
              name TEXT, 
              party TEXT,
              location TEXT,
              grade_current INTEGER 
            )
          `,
        (err) => {
            if (err) console.log(err.message)
        }
    )

    db.run(
        `CREATE TABLE IF NOT EXISTS Voters 
            (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              first_name TEXT,
              last_name TEXT,
              gender TEXT,
              age INTEGER
            )`,
        (err) => {
            if (err) console.log(err.message)
        }
    )
    db.run(
        `CREATE TABLE IF NOT EXISTS Votes 
            ( id INTEGER PRIMARY KEY AUTOINCREMENT, 
                voterId INTEGER,
                politicianId INTEGER,
                    FOREIGN KEY (voterId) REFERENCES Voters(id),
                    FOREIGN KEY (politicianId) REFERENCES Politicians(id)
            )
          `,
        (err) => {
            if (err) console.log(err.message)
        }
    )
})

db.close()
