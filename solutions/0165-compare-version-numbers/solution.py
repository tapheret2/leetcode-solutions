# Problem: 165. Compare Version Numbers
# Difficulty: Medium
# Language: Python
# Runtime: 0 ms
# Memory: 18 MB
# Link: https://leetcode.com/problems/compare-version-numbers/

class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        # Tách các chuỗi phiên bản thành danh sách các số
        v1_parts = list(map(int, version1.split('.')))
        v2_parts = list(map(int, version2.split('.')))
        
        # Lấy độ dài lớn nhất để so sánh
        max_len = max(len(v1_parts), len(v2_parts))
        
        # Mở rộng danh sách ngắn hơn bằng các số 0
        v1_parts.extend([0] * (max_len - len(v1_parts)))
        v2_parts.extend([0] * (max_len - len(v2_parts)))
        
        # So sánh từng phần
        for i in range(max_len):
            if v1_parts[i] > v2_parts[i]:
                return 1
            elif v1_parts[i] < v2_parts[i]:
                return -1
        
        return 0

