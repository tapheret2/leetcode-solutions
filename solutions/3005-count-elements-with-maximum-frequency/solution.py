# Problem: 3005. Count Elements With Maximum Frequency
# Difficulty: Easy
# Language: Python
# Runtime: 0 ms
# Memory: 17.9 MB
# Link: https://leetcode.com/problems/count-elements-with-maximum-frequency/

class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        # Đếm tần suất bằng dictionary
        freq = {}
        for num in nums:
            freq[num] = freq.get(num, 0) + 1
        
        # Tìm tần suất cao nhất
        max_freq = max(freq.values())
        
        # Tính tổng tần suất của các phần tử có tần suất bằng max_freq
        return sum(f for f in freq.values() if f == max_freq)
