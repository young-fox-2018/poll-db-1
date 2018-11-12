# poll-db-1

hitung jumlah vote politician yg mengandung(adam)

1.
SELECT name, party, currentGrade from politicians
WHERE currentGrade >=9 AND currentGrade <= 11 and party is 'R'

2. 
SELECT  COUNT(votes.politicianID) AS totalVote, politicians.name
FROM politicians
JOIN votes
ON politicians.id = votes.politicianID
WHERE politicians.name = 'Olympia Snowe'
GROUP by votes.politicianID;


3.
SELECT  COUNT(votes.politicianID) AS totalVote, politicians.name
FROM politicians
JOIN votes
ON politicians.id = votes.politicianID
WHERE politicians.name like 'Adam %'
GROUP by votes.politicianID;

4.
SELECT COUNT(votes.politicianID) AS totalVote, politicians.name, politicians.party, politicians.location
FROM politicians
JOIN votes
ON politicians.id = votes.politicianID
GROUP by votes.politicianID
ORDER by 1 DESC
LIMIT 3;

5. 
SELECT firstName, lastname, gender, age
FROM voters
JOIN votes
ON voters.id = votes.voterID
WHERE votes.politicianID = (
                                SELECT id 
                                FROM politicians
                                where name = 'Olympia Snowe'
                           );       
