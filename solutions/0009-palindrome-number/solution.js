// Problem: 9. Palindrome Number
// Difficulty: Easy
// Language: JavaScript
// Runtime: 5 ms
// Memory: 63 MB
// Link: https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0)
    {
        return false;
    }
    else if (x<10)
    {
        return true;
    }
    else 
    {
        var temp=x;
        var reserved=0;
        while (temp>0)
        {
            var digit=temp%10;
            reserved=reserved*10+digit;
            temp = Math.floor(temp / 10);
        }
        return (reserved==x);
    }
};
