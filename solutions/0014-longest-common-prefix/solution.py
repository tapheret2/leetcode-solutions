# Problem: 14. Longest Common Prefix
# Difficulty: Easy
# Language: Python
# Runtime: 0 ms
# Memory: 19.3 MB
# Link: https://leetcode.com/problems/longest-common-prefix/

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""
        prefix = strs[0]
        for i in range(1, len(strs)):
            while strs[i].find(prefix) != 0:
                prefix = prefix[:-1]  
                if not prefix:  
                    return ""
        
        return prefix
