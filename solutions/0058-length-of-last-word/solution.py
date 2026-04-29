# Problem: 58. Length of Last Word
# Difficulty: Easy
# Language: Python
# Runtime: 0 ms
# Memory: 17.9 MB
# Link: https://leetcode.com/problems/length-of-last-word/

class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        count=0
        for c in range(len(s)-1,-1,-1):
            if s[c]!=' ':
                count+=1
            elif count>0:
                return count
        return count
                

