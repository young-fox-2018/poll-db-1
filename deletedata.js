const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db');

const argv = process.argv.slice(2);
const command = argv[0]

switch (command) {
  case "politicians":
    let queryPoliticians = `
    DELETE FROM politicians
    WHERE politican_id = "${argv[1]}";`

    db.run(queryPoliticians, function(err) {
      if (err) {
        throw err
      }
      console.log(`berhasil menghapus data di tabel politicians`);
    })
    break;

    case "voters":
      let queryVoters = `
      DELETE FROM voters
      WHERE voter_id = "${argv[1]}";`

      db.run(queryVoters, function(err) {
        if (err) {
          throw err
        }
        console.log(`berhasil menghapus data di tabel voters`);
      })
      break;

      case "votes":
        let queryVotes = `
        DELETE FROM votes
        WHERE votes_id = "${argv[1]}";`

        db.run(queryVotes, function(err) {
          if (err) {
            throw err
          }
          console.log(`berhasil menghapus data di tabel votes`);
        })
        break;

  default: console.log(`silahkan pilih mau menghapus apa, politicians, voters atau votes`);

}