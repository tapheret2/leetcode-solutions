// Problem: 3432. Count Partitions with Even Sum Difference
// Difficulty: Easy
// Language: JavaScript
// Runtime: 1 ms
// Memory: 55.6 MB
// Link: https://leetcode.com/problems/count-partitions-with-even-sum-difference/

/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    var sum1=0;
    var res=0;
    for (var i=0;i<nums.length-1;i++)
    {
        sum1+=nums[i];
        var sum2=0;
        for (var j=i+1;j<nums.length;j++)
        {
            sum2+=nums[j];
        }
        if ((sum1-sum2)%2==0) res++;
    }
    return res;
};
