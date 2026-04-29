// Problem: 1. Two Sum
// Difficulty: Easy
// Language: JavaScript
// Runtime: 51 ms
// Memory: 54.8 MB
// Link: https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var res=[];
    for (var i=0;i<nums.length-1;i++)
    {
        for (var j=i+1;j<nums.length;j++)
        {
            if (nums[i]+nums[j]==target)
            {
                res[0]=i;
                res[1]=j;
            }
        }
    }
    return res;
};
