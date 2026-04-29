// Problem: 1929. Concatenation of Array
// Difficulty: Easy
// Language: C++
// Runtime: 0 ms
// Memory: 17 MB
// Link: https://leetcode.com/problems/concatenation-of-array/

class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        int n=nums.size();
        for (int i=0;i<n;i++)
        {
            nums.push_back(nums[i]);
        }
    return nums;
    }
};
