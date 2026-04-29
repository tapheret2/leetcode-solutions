// Problem: 1480. Running Sum of 1d Array
// Difficulty: Easy
// Language: JavaScript
// Runtime: 0 ms
// Memory: 56.9 MB
// Link: https://leetcode.com/problems/running-sum-of-1d-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var res=[];
    var sum=0;
    for (var i=0;i<nums.length;i++)
    {
        sum+=nums[i];
        res[i]=sum;
    }
    return res;
};
