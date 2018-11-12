// Release 3

// Menampilkan nama politician , partai dan grade_current politician 
//tersebut yang berada di partai R dan memiliki grade_current range 9 - 11

SELECT Politicians.name, Politicians.party, Politicians.grade_current FROM  Politicians
WHERE party = "R" GROUP BY grade_current HAVING grade_current >= 9 AND grade_current <=11;

// SELECT Politicians.name, Politicians.party, Politicians.grade_current FROM  Politicians
// WHERE party = "R" grade_current between 9 and 11

SELECT COUNT(*) as totalVote, Politicians.name FROM Politicians 
INNER JOIN Votes on politician_id = Politicians.id 
INNER JOIN Voters on Voters.id = Votes.voter_id
WHERE Politicians.name = "Olympia Snowe";

//  hitung jumlah vote untuk politician yang namanya mengandung kata adam

SELECT Politicians.name, COUNT(*) as totalVote FROM Politicians 
INNER JOIN Votes on politician_id = Politicians.id 
INNER JOIN Voters on Voters.id = Votes.voter_id
GROUP BY Politicians.name HAVING Politicians.name LIKE "Adam%";

// Tampilkan 3 politician berserta nama partai dan lokasi politician tersebut, yang memiliki suara terbanyak

SELECT Politicians.name, Politicians.party, Politicians.location, COUNT(*) as totalVote FROM Politicians
INNER JOIN Votes on politician_id = Politicians.id 
INNER JOIN Voters on Voters.id = Votes.voter_id
GROUP BY Politicians.name ORDER BY totalVote DESC LIMIT 3

// tugas extra: tampilin yang punya vote paling banyak dari masing2 partai

// tampilkan siapa saja yang melakukan voting ke politician yang bernama olympia snowe

SELECT Voters.first_name, Voters.last_name, Voters.gender, Voters.age FROM Voters
INNER JOIN Votes on voter_id = Voters.id
INNER JOIN Politicians on Politicians.id = politician_id
WHERE Politicians.name = "Olympia Snowe"

// Poll DB 2

// Berapa banyak vote yang diterima politicians yang memiliki grade dibawah 9 
SELECT Politicians.name, Politicians.location, Politicians.grade_current, COUNT(*) as totalVote FROM Politicians 
INNER JOIN Votes on politician_id = Politicians.id
INNER JOIN Voters on Voters.id = voter_id
GROUP BY Politicians.name HAVING grade_current < 9
ORDER BY grade_current ASC;

// 3 Politicians yang memiliki vote terbanyak dan siapa saja yang memilih politician tersebut.

CREATE VIEW top3 as 
SELECT Politicians.id, Politicians.name, COUNT(*) as totalVote FROM Politicians
INNER JOIN Votes on politician_id = Politicians.id
INNER JOIN Voters on Voters.id = voter_id
GROUP BY Politicians.name ORDER BY totalVote DESC LIMIT 3;

SELECT totalVote, top3.name, Voters.first_name||" "||Voters.last_name as votersName, Voters.gender FROM Voters
INNER JOIN Votes on voter_id = Voters.id
INNER JOIN top3 on top3.id = politician_id
ORDER BY totalVote DESC;

// List nama orang-orang yang melakukan kecurangan 

SELECT COUNT(*) as totalVote, Voters.first_name||" "||Voters.last_name as votersName, Voters.gender, Voters.age FROM Voters
INNER JOIN Votes on voter_id = Voters.id 
GROUP BY Voters.id HAVING totalVote > 1
ORDER BY totalVote DESC




