// Problem: 1342. Number of Steps to Reduce a Number to Zero
// Difficulty: Easy
// Language: JavaScript
// Runtime: 0 ms
// Memory: 55.6 MB
// Link: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    var steps=0;
    while (num>0) 
    {
        if (num%2==0)
        {
            steps++;
            num/=2;
        } 
        else
        {
            num-=1;
            steps++;
        }
    }
    return steps;
};
