const db = require('./setup.js')
const argv = process.argv.slice(2)

let input = argv[0]
let tableName = argv[1]

switch(input) {
    case 'insert' : 
        if(tableName === 'politicians') {
            let addData = `INSERT INTO politicians (name, party, location, grade) 
            VALUES('${argv[2]}', '${argv[3]}', '${argv[4]}', '${argv[5]}')`
            
            db.run(addData, function(err) {
                if(err) throw err
                console.log('Add New Data Politicians Success');
            })
        } else if (tableName === 'voters') {
            let addData = `INSERt INTO voters (firstName, lastName, gender, age)
            VALUES('${argv[2]}', '${argv[3]}', '${argv[4]}', '${argv[5]}')`
            
            db.run(addData, function(err) {
                if(err) throw err
                console.log('Add New Data Voter Success');
            })
        } else if (tableName === 'votes') {
            let addData = `INSERt INTO votes (voterId, politicianId)
            VALUES('${argv[2]}', '${argv[3]}'`
            
            db.run(addData, function(err) {
                if(err) throw err
                console.log('Add New Data Vote Success');
            })
        };break;

    case 'update' :
    if(tableName === 'politicians') {
        // kasih kondisi argv nya disini 
        // if( argv[] === 'ada nilainya ')
        let updateData
        if(argv[3] !== '') {
            updateData = `UPDATE politicians SET name = "${argv[3]}" WHERE politicianId = "${argv[2]}"`
        } else if (argv[4] !== '') {
            updateData = `UPDATE politicians SET party = "${argv[4]}" WHERE politicianId = "${argv[2]}"`
        }
        
        db.run(updateData, function(err) {
            if(err) throw err
            console.log('Update Data Politicians Success');
        })
    } else if (tableName === 'voters') {

    } else if (tableName === 'votes') {

    };break;

    case 'delete' : 
    if(tableName === 'politicians') {
        let deleteData = `DELETE FROM politicians WHERE politicianId = "${argv[2]}"`
        
        db.run(deleteData, function(err) {
            if(err) throw err
            console.log('Delete Data Politicians Success');
        })
    } else if (tableName === 'voters') {

    } else if (tableName === 'votes') {

    };break;
}