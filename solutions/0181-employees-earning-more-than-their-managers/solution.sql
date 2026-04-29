-- Problem: 181. Employees Earning More Than Their Managers
-- Difficulty: Easy
-- Language: MySQL
-- Runtime: 438 ms
-- Memory: 0B
-- Link: https://leetcode.com/problems/employees-earning-more-than-their-managers/

SELECT
    e.name AS Employee
FROM Employee AS e
INNER JOIN Employee AS m
    ON e.managerId=m.id
WHERE e.salary>m.salary

