# Problem: 3688. Bitwise OR of Even Numbers in an Array
# Difficulty: Easy
# Language: Python
# Runtime: 3 ms
# Memory: 18.1 MB
# Link: https://leetcode.com/problems/bitwise-or-of-even-numbers-in-an-array/

class Solution:
    def evenNumberBitwiseORs(self, nums: List[int]) -> int:
        res=0
        for num in nums:
            if num%2==0:
                res=res|num
        return res
