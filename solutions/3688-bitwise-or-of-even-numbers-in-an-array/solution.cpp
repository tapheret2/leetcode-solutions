// Problem: 3688. Bitwise OR of Even Numbers in an Array
// Difficulty: Easy
// Language: C++
// Runtime: 0 ms
// Memory: 24.5 MB
// Link: https://leetcode.com/problems/bitwise-or-of-even-numbers-in-an-array/

class Solution {
public:
    int evenNumberBitwiseORs(vector<int>& nums) {
        int res=0;
        for (int i=0;i<nums.size();i++)
        {
            if (nums[i]%2==0)
            {
                res=res|nums[i];
            }
        }
        return res;
    }
};
