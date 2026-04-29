// Problem: 3684. Maximize Sum of At Most K Distinct Elements
// Difficulty: Easy
// Language: C++
// Runtime: 7 ms
// Memory: 29.1 MB
// Link: https://leetcode.com/problems/maximize-sum-of-at-most-k-distinct-elements/

class Solution {
public:
    vector<int> maxKDistinct(vector<int>& nums, int k) {
        // Lấy các số duy nhất bằng unordered_set
        unordered_set<int> uniqueSet(nums.begin(), nums.end());
        
        // Chuyển sang vector để sắp xếp
        vector<int> uniqueNums(uniqueSet.begin(), uniqueSet.end());
        
        // Sắp xếp giảm dần
        sort(uniqueNums.begin(), uniqueNums.end(), greater<int>());
        
        // Chọn tối đa k số
        int size = min(k, (int)uniqueNums.size());
        vector<int> result(uniqueNums.begin(), uniqueNums.begin() + size);
        
        return result;
    }
};
