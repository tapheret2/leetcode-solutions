// Problem: 1672. Richest Customer Wealth
// Difficulty: Easy
// Language: JavaScript
// Runtime: 0 ms
// Memory: 54.7 MB
// Link: https://leetcode.com/problems/richest-customer-wealth/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    maxWealth=0;
    for (var i=0;i<accounts.length;i++)
    {
        var currentWealth=0;
        for (var j=0;j<accounts[i].length;j++)
        {
            currentWealth+=accounts[i][j];
        }
        if (currentWealth>=maxWealth)
        {
            maxWealth=currentWealth;
        }
    }
    return maxWealth;
};
