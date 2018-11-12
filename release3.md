number 1
SELECT * 
FROM politicians
WHERE party = "R" AND grade_current >= 9 AND grade_current <= 11

number 2
SELECT COUNT(*) AS TotalVotes , politicians.name
FROM votes
JOIN politicians ON votes.politician_id = politicians.id
WHERE votes.politician_id = (
	SELECT id
	FROM politicians
	WHERE name = "Olympia Snowe"
	);

number3
SELECT name,Count(*) AS TotalVote
FROM politicians
JOIN votes ON votes.politician_id = politicians.id
WHERE name LIKE 'adam%'
GROUP BY name;

number 4
SELECT COUNT(*) AS Totalvotes , name ,party,location
FROM votes
JOIN politicians ON votes.politician_id = politicians.id
GROUP BY name
ORDER BY Totalvotes desc
LIMIT 3;

number 5
SELECT first_name,last_name,gender,age
FROM votes
JOIN voters ON votes.voter_id = voters.id
WHERE votes.politician_id = (
		SELECT id 
		FROM politicians
		WHERE name = "Olympia Snowe"
		);
