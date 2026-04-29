// Problem: 217. Contains Duplicate
// Difficulty: Easy
// Language: C++
// Runtime: 102 ms
// Memory: 95 MB
// Link: https://leetcode.com/problems/contains-duplicate/

class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        int n=nums.size();
        set<int> unique_elements; 
        for (int i = 0; i < n; i++) 
        {
            unique_elements.insert(nums[i]);
        }
        if (n==unique_elements.size())
        {
            return false;
        }
        return true;
    }
};
