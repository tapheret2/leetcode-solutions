// Problem: 35. Search Insert Position
// Difficulty: Easy
// Language: C++
// Runtime: 0 ms
// Memory: 13.6 MB
// Link: https://leetcode.com/problems/search-insert-position/

class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int res;
        for (int i=0;i<nums.size()-1;i++)
        {
            if (nums[i]==target)
            {
                res=i;
                break;
            }
            else
            {
                if (nums[i]<target&&target<nums[i+1])
                {
                    res=i+1;
                    break;
                }
            }
        }
        if (target<nums[0])
                {
                    res=0;
                }
        else if (target>nums[nums.size()-1])
        {
            res=nums.size();
        }
        return res;
    }
};
