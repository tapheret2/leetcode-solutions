-- Problem: 182. Duplicate Emails
-- Difficulty: Easy
-- Language: MySQL
-- Runtime: 384 ms
-- Memory: 0B
-- Link: https://leetcode.com/problems/duplicate-emails/

SELECT 
    email
FROM Person
GROUP BY email
HAVING COUNT(*)>1
