
// NO. 1
SELECT * FROM candidates WHERE grade_current >= 9 AND grade_current <= 11 AND party = "R";


//NO.2
SELECT COUNT(*) AS totalVotes , candidates.name 
FROM polls
JOIN candidates ON polls.candidate_id = candidates.id
WHERE polls.candidate_id = (
	SELECT id
	FROM candidates
	WHERE name = "Olympia Snowe"
);

// NO.3
SELECT name, COUNT(*) AS totalVote
FROM polls
JOIN candidates ON polls.candidate_id = candidates.id
WHERE name LIKE "Adam%"
GROUP BY name ;

//NO. 4
SELECT COUNT(*) AS totalVote , name , party , location
FROM polls
JOIN candidates ON polls.candidate_id = candidates.id 
GROUP BY name
ORDER BY totalVote desc
LIMIT 3;


// NO. 5
SELECT first_name , last_name , gender , age FROM voters 
JOIN polls ON voters.id = polls.voter_id 
WHERE polls.candidate_id = (SELECT id FROM candidates WHERE name = "Olympia Snowe");