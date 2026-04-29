# Problem: 2769. Find the Maximum Achievable Number
# Difficulty: Easy
# Language: Python
# Runtime: 0 ms
# Memory: 17.8 MB
# Link: https://leetcode.com/problems/find-the-maximum-achievable-number/

class Solution:
    def theMaximumAchievableX(self, num: int, t: int) -> int:
        return num+2*t
