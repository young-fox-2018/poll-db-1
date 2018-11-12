```sql
SELECT name, party, gradeCurrent
FROM Politicians
WHERE party = 'R' AND gradeCurrent BETWEEN 9 AND 11
```

```sql
SELECT name, count(*) AS totalVote 
FROM Votes a 
INNER JOIN politicians b 
ON a.politicianId= b.id
 WHERE b.name = 'Olympia Snowe';
 ```

 ```sql
SELECT name, count(*) AS totalVote 
FROM Votes a 
INNER JOIN politicians b 
ON a.politicianId= b.id WHERE b.name LIKE '%Adam %'
GROUP BY b.name;
```

```sql
SELECT COUNT(*) AS totalVote, name,  party, location
FROM Politicians a
INNER JOIN Votes b
ON a.id = b.politicianId
GROUP BY a.name
ORDER BY totalVote DESC
LIMIT 3
```

```sql
SELECT firstName, lastName, location, age FROM Voters a
INNER JOIN Votes b
ON a.id = b.voterId
INNER JOIN Politicians c
ON c.id = b.politicianId
WHERE c.name = 'Olympia Snowe'
)
```

