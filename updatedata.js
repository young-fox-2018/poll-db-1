const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db');

const argv = process.argv.slice(2);
const command = argv[0]

switch (command) {
  case "politicians":
    let queryPoliticians = `
    UPDATE politicians
    SET
    name = "${argv[1]}",
    party = "${argv[2]}",
    location = "${argv[3]}",
    grade_current = "${argv[4]}"
    WHERE politican_id = "${argv[5]}";`

    db.run(queryPoliticians, function(err) {
      if (err) {
        throw err
      }
      console.log(`berhasil mengupdate data di tabel politicians`);
    })
    break;

    case "voters":
      let queryVoters = `
      UPDATE voters
      SET
      first_name = "${argv[1]}",
      last_name = "${argv[2]}",
      gender = "${argv[3]}",
      age = "${argv[4]}"
      WHERE voter_id = "${argv[5]}";`

      db.run(queryVoters, function(err) {
        if (err) {
          throw err
        }
        console.log(`berhasil mengupdate data di tabel voters`);
      })
      break;

      case "votes":
        let queryVotes = `
        UPDATE votes
        SET
        voterId = "${argv[1]}",
        politiciansId = "${argv[2]}"
        WHERE votes_id = "${argv[3]}";`

        db.run(queryVotes, function(err) {
          if (err) {
            throw err
          }
          console.log(`berhasil mengupdate data di tabel votes`);
        })
        break;

  default: console.log(`silahkan pilih mau mengupdate apa, politicians, voters atau votes`);

}