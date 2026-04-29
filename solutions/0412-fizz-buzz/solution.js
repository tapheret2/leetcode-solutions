// Problem: 412. Fizz Buzz
// Difficulty: Easy
// Language: JavaScript
// Runtime: 2 ms
// Memory: 57.5 MB
// Link: https://leetcode.com/problems/fizz-buzz/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var res=[];
    for (var i=1;i<n+1;i++)
    {
        if (i%3==0&&i%5==0)
        {
            res[i-1]="FizzBuzz"
        }
        else if (i%3==0)
        {
            res[i-1]="Fizz"
        }
        else if (i%5==0)
        {
            res[i-1]="Buzz"
        }
        else
        {
            res[i-1]=i.toString();
        }
    }
    return res;
};
