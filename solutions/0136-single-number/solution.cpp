// Problem: 136. Single Number
// Difficulty: Easy
// Language: C++
// Runtime: 849 ms
// Memory: 20.4 MB
// Link: https://leetcode.com/problems/single-number/

class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int res;
        for (int i=0;i<nums.size();i++)
        {
            int count =0;
            for (int j=0;j<nums.size();j++)
            {
                if (nums[i]==nums[j])
                {
                    count++;
                }
            }
            if (count==1)
            {
                res=nums[i];
            }
        }
        return res;
    }
};
