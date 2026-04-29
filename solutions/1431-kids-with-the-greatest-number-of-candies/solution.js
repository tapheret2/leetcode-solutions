// Problem: 1431. Kids With the Greatest Number of Candies
// Difficulty: Easy
// Language: JavaScript
// Runtime: 0 ms
// Memory: 56 MB
// Link: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var maxCandies=Math.max(...candies);
    var res=[];
    for (var i=0;i<candies.length;i++)
    {
        res[i]=((candies[i]+extraCandies)>=maxCandies);
    }
    return res;
};
