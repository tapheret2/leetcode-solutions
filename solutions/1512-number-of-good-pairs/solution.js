// Problem: 1512. Number of Good Pairs
// Difficulty: Easy
// Language: JavaScript
// Runtime: 0 ms
// Memory: 53.7 MB
// Link: https://leetcode.com/problems/number-of-good-pairs/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    var res=0;
    for (var i=0;i<nums.length-1;i++)
    {
        for (var j=i+1;j<nums.length;j++)
        {
            if (nums[i]==nums[j])
            {
                res++;
            }
        }
    }
    return res;
};
