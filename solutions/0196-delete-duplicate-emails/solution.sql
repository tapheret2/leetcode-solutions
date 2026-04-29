-- Problem: 196. Delete Duplicate Emails
-- Difficulty: Easy
-- Language: MySQL
-- Runtime: 601 ms
-- Memory: 0B
-- Link: https://leetcode.com/problems/delete-duplicate-emails/

DELETE FROM Person
WHERE id NOT IN (
    SELECT id 
    FROM (
        SELECT MIN(id) AS id
        FROM Person
        GROUP BY email
    ) AS Temp
)
