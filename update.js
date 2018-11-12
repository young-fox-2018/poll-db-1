
const args = process.argv.slice(2);
const db = require("./db.js");
let command = args[0];

switch (command) {
    case "update-Politicians" :
        const updateData = `UPDATE politicians 
                            SET name = "${args[2]}",
                                party = "${args[3]}",
                                location = "${args[4]}",
                                grade_current = "${args[5]}"
                            WHERE  politicians_id = ${args[1]}`;
    db.run(updateData, function(err) {
        if(err) throw err;
        console.log("successfully update data!")
    })
}
