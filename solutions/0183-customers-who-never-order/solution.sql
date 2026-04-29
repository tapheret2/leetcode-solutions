-- Problem: 183. Customers Who Never Order
-- Difficulty: Easy
-- Language: MySQL
-- Runtime: 628 ms
-- Memory: 0B
-- Link: https://leetcode.com/problems/customers-who-never-order/

SELECT
    name AS Customers 
FROM Customers AS c
LEFT JOIN Orders AS o
    ON c.id=o.customerId
WHERE o.customerId IS NULL
