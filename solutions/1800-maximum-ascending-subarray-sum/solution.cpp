// Problem: 1800. Maximum Ascending Subarray Sum
// Difficulty: Easy
// Language: C++
// Runtime: 0 ms
// Memory: 11.1 MB
// Link: https://leetcode.com/problems/maximum-ascending-subarray-sum/

class Solution {
public:
    int maxAscendingSum(vector<int>& nums) {
        int curr = nums[0], ans = nums[0];
        for (int i = 1; i < nums.size(); ++i) {
            curr = nums[i] > nums[i - 1] ? curr + nums[i] : nums[i];
            ans = max(ans, curr);
        }
        return ans;
    }
};
