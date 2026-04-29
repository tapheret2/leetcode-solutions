# Problem: 125. Valid Palindrome
# Difficulty: Easy
# Language: Python
# Runtime: 7 ms
# Memory: 23.7 MB
# Link: https://leetcode.com/problems/valid-palindrome/

class Solution:
    def isPalindrome(self, s: str) -> bool:
        new_s=[c.lower() for c in s if c.isalnum()]
        return new_s == new_s[::-1]

        
