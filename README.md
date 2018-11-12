# poll-db-1

1.
SELECT name, party, grade 
FROM politicians 
WHERE party = 'R' AND grade BETWEEN 9 AND 11
ORDER BY grade ASC;

2.
SELECT COUNT(votes.politicianId) AS totalVote, politicians.name
FROM politicians
JOIN votes
ON politicians.politicianId = votes.politicianId
WHERE politicians.name = 'Olympia Snowe'
GROUP by votes.politicianId;

3.
SELECT COUNT(votes.politicianId) AS totalVote, politicians.name
FROM politicians
JOIN votes
ON politicians.politicianId = votes.politicianId
WHERE politicians.name like 'Adam %'
GROUP by votes.politicianId;

4.
SELECT COUNT(votes.politicianID) AS totalVote, politicians.name, politicians.party, politicians.location
FROM votes
JOIN politicians
ON votes.politicianId = politicians.politicianId
GROUP BY name
ORDER BY totalVote desc
Limit 3;

5.
SELECT firstName, lastName, gender, age
FROM votes
JOIN voters ON votes.voterId = voters.voterId
WHERE votes.politicianId = (
                            SELECT politicianId 
                            FROM politicians 
                            WHERE name = 'Olympia Snowe'
                            );
                            