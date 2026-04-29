// Problem: 2626. Array Reduce Transformation
// Difficulty: Easy
// Language: JavaScript
// Runtime: 49 ms
// Memory: 54.3 MB
// Link: https://leetcode.com/problems/array-reduce-transformation/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let res=init;
    for (let i=0;i<nums.length;i++)
    {
        res=fn(res,nums[i]);
    }
    return res;
};
