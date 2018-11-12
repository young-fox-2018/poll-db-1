RELEASE 3
Part 1
``` SQL
SELECT name,party,grade_current FROM Politicians
WHERE party='R'
AND grade_current BETWEEN 9 AND 11
ORDER BY grade_current ```

Part 2
``` SQL
SELECT b.name,count(*)totalVote FROM Votes a
INNER JOIN Politicians b ON a.politicianId=b.id
WHERE b.name='Olympia Snowe'

```
Part 3
``` SQL
SELECT a.name,count(*)totalVote FROM Politicians a
LEFT JOIN Votes b ON a.id=b.politicianId
WHERE a.name like '%Adam%'
GROUP BY a.name
ORDER BY totalVote ASC

```
Part 4
``` SQL
SELECT  count(*)totalVote,b.name,b.party,b.location FROM Votes a
INNER JOIN Politicians b ON a.politicianId=b.id
GROUP BY  a.politicianId
ORDER BY totalVote DESC
LIMIT 3
```
Part 5
``` SQL
SELECT c.first_name,c.last_name,c.gender,c.age FROM  Votes a
INNER JOIN Politicians b ON a.politicianId=b.id
INNER JOIN Voters  c ON a.voterId=c.id
WHERE b.name='Olympia Snowe'
```