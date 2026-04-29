-- Problem: 175. Combine Two Tables
-- Difficulty: Easy
-- Language: MS SQL
-- Runtime: 593 ms
-- Memory: 0B
-- Link: https://leetcode.com/problems/combine-two-tables/

SELECT 
    p.firstName, 
    p.lastName, 
    a.city, 
    a.state
FROM Person p
LEFT JOIN Address a 
    ON p.personId = a.personId;
