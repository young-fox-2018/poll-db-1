const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db');

const argv = process.argv.slice(2);
const command = argv[0]

switch (command) {
  case "politicians":
    let queryPoliticians = `INSERT INTO politicians (name,party,location,grade_current)
     VALUES (
      "${argv[1]}",
      "${argv[2]}",
      "${argv[3]}",
      "${argv[4]}");`

    db.run(queryPoliticians, function(err) {
      if (err) {
        throw err
      }
      console.log(`berhasil menambah data di tabel politicians`);
    })
    break;

    case "voters":
      let queryVoters = `INSERT INTO voters (first_name,last_name,gender,age)
       VALUES (
        "${argv[1]}",
        "${argv[2]}",
        "${argv[3]}",
        "${argv[4]}");`

      db.run(queryVoters, function(err) {
        if (err) {
          throw err
        }
        console.log(`berhasil menambah data di tabel voters`);
      })
      break;

      case "votes":
        let queryVotes = `INSERT INTO votes (voterId,politicanId)
         VALUES (
          "${argv[1]}",
          "${argv[2]}");`

        db.run(queryVotes, function(err) {
          if (err) {
            throw err
          }
          console.log(`berhasil menambah data di tabel votes`);
        })
        break;

  default: console.log(`silahkan pilih mau menambah apa, politicians, voters atau votes`);

}