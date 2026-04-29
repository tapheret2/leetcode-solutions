# Problem: 70. Climbing Stairs
# Difficulty: Easy
# Language: Python
# Runtime: 0 ms
# Memory: 17.6 MB
# Link: https://leetcode.com/problems/climbing-stairs/

class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 1:
            return 1
        a, b = 1, 1
        for _ in range(2, n + 1):
            a, b = b, a + b
        return b

