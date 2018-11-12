# poll-db-1
RELEASE 3
```SQL
1.
SELECT name,party,grade_current FROM Politicians
WHERE grade_current BETWEEN 9 AND 11

2. 
SELECT count(*) AS totalVotes,name  FROM Politicians 
JOIN Votes ON Politicians.id=Votes.politicianId 
WHERE name = "Olympia Snowe" 

3.
SELECT count(*) AS totalVotes,name  FROM Politicians 
JOIN Votes ON Politicians.id=Votes.politicianId 
WHERE name LIKE "%Adam%"
GROUP BY name

4. 
SELECT name,party,location ,count(*) FROM Politicians
JOIN Votes ON Politicians.id=Votes.politicianId
GROUP BY name
ORDER BY count(*) DESC
LIMIT 3

5.
SELECT first_name,last_name,gender,age FROM votes
JOIN Voters ON Voters.id=Votes.voterId
JOIN Politicians ON Votes.politicianId=Politicians.id
WHERE name ="Olympia Snowe"
ORDER BY first_name

```