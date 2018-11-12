/*
release 3.1

CREATE VIEW release3_1 as 
SELECT name, party, grade_current
FROM Politicians
WHERE (party = "R") AND (grade_current BETWEEN 9 AND 11);

release 3.2

SELECT Politicians.name ,COUNT(*)
FROM Politicians
JOIN Votes on politicians.id = Votes.politicianId
WHERE politicianId = (SELECT id from politicians
WHERE name = "Olympia Snowe");

release 3.3

SELECT Politicians.name ,COUNT(*) as totalVote
FROM Votes
JOIN Politicians on politicians.id = Votes.politicianId
WHERE Politicians.name LIKE "%Adam%"
GROUP BY Politicians.name;

release 3.4

SELECT politicianID, Politicians.name, Politicians.party, COUNT(*) as totalVotes
FROM Votes JOIN Politicians
ON Votes.politicianId = Politicians.id
GROUP BY politicianId 
ORDER BY totalVotes Desc, Politicians.party 
LIMIT 3;

release 3.5

SELECT Voters.first_name, Voters.last_name, Voters.gender, Voters.age 
FROM Votes
JOIN Politicians on politicians.id = Votes.politicianId
JOIN Voters on Voters.id = Votes.VoterId
WHERE politicianId = (SELECT id from politicians
WHERE name = "Olympia Snowe");


*/