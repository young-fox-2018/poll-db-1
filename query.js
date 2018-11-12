const db = require('./db')
const Table = require('cli-table');
// release 3
// 1

let query1 = 
`
SELECT * FROM politicians 
WHERE party = 'R'
AND grade_current >= 9 AND grade_current <= 11
`

// db.all(query1, function(err, data){
//     if(err){
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

// 2

let query2 = 
`
SELECT count(*) totalVote, b.name 
FROM votes a
INNER JOIN politicians b on 
a.politicianId = b.id
where b.name = 'Olympia Snowe'
group by b.name
`

// db.all(query2, function(err, data){
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

// 3

let query3 = 
`
SELECT b.name, count(*) totalVote
FROM votes a
INNER JOIN politicians b on 
a.politicianId = b.id
where b.id in (
                select id from politicians 
                where name like '%Adam%')
group by b.name
`

// db.all(query3, function(err, data){
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

let query4 = 
`
SELECT count(*) totalVote , b.name, b.party, b.location
FROM votes a
INNER JOIN politicians b ON a.politicianId = b.id
GROUP BY politicianId
ORDER BY totalVote desc
limit 3
`

// db.all(query4, function(err, data){
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })


let query5 = 
`
SELECT b.first_name, b.last_name, b.gender, b.age FROM votes a
inner join voters b on a.voterId = b.id
WHERE politicianId = (
    SELECT id FROM politicians where name = 'Olympia Snowe'
)
`

db.all(query5, function(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)

        
    }
})