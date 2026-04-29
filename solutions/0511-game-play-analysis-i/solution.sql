-- Problem: 511. Game Play Analysis I
-- Difficulty: Easy
-- Language: MySQL
-- Runtime: 513 ms
-- Memory: 0B
-- Link: https://leetcode.com/problems/game-play-analysis-i/

SELECT 
    player_id,
    MIN(event_date) AS first_login
FROM Activity
GROUP BY player_id;
