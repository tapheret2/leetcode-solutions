# Write your MySQL query statement below
SELECT C1.name
FROM Customer AS C1
WHERE C1.referee_id IS NULL OR C1.referee_id !=2
