# poll-db-1

# Release 3 Queries

1. Tampilkan nama politician, partai, dan grade_current politician yang berada di partai R dan memiliki grade_current rage 9 s/d 11

```sql
SELECT name, party, grade_current FROM politicians WHERE party = 'R' AND grade_current BETWEEN 9 AND 11;
```

2. Hitung jumlah vote untuk politician yang bernama Olympia Snowe
```sql
SELECT COUNT(votes.id) AS totalVote, politicians.name FROM votes LEFT JOIN politicians WHERE votes.politicianId = politicians.id AND politicians.name = 'Olympia Snowe';

```

3. Hitung jumlah vote untuk politician yang namanya mengandung kata Adam.
```sql
SELECT name, COUNT(votes.voterId) AS totalVote FROM politicians LEFT JOIN votes WHERE politicians.id = votes.politicianId AND politicians.name LIKE '%Adam%' GROUP BY politicians.name;
```

4. Tampilkan 3 politician beserta nama partai dan lokasi politician tersebut, yang memiliki suara terbanyak
```sql
SELECT count(votes.id) as totalVote, name, party, location from votes JOIN politicians ON votes.politicianId = politicians.id GROUP BY politicianId ORDER BY totalVote DESC LIMIT 3;
```

5. Tampilkan siapa saja yang melakukan voting ke politician yang bernama Olympia Snowe
```sql
SELECT first_name, last_name, gender, age FROM voters JOIN votes ON voters.id = votes.voterId WHERE politicianId = (SELECT id from politicians WHERE name = 'Olympia Snowe');
```