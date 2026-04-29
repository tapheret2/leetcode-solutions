# Problem: 219. Contains Duplicate II
# Difficulty: Easy
# Language: Python
# Runtime: 34 ms
# Memory: 30.7 MB
# Link: https://leetcode.com/problems/contains-duplicate-ii/

class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        window = set()  # Tạo một tập hợp để lưu các phần tử trong cửa sổ
        
        for i in range(len(nums)):
            # Nếu cửa sổ vượt quá kích thước k, xóa phần tử cũ nhất
            if i > k:
                window.remove(nums[i - k - 1])
            
            # Kiểm tra nếu phần tử hiện tại đã có trong cửa sổ
            if nums[i] in window:
                return True
            
            # Thêm phần tử hiện tại vào cửa sổ
            window.add(nums[i])
        
        return False
