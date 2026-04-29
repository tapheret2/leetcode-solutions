// Problem: 2634. Filter Elements from Array
// Difficulty: Easy
// Language: JavaScript
// Runtime: 52 ms
// Memory: 54 MB
// Link: https://leetcode.com/problems/filter-elements-from-array/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var res=[];
    for (let i=0;i<arr.length;i++)
    {
        if (fn(arr[i],i))
        {
            res.push(arr[i]);
        }
    }
    return res;
};
