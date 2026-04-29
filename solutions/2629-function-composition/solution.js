// Problem: 2629. Function Composition
// Difficulty: Easy
// Language: JavaScript
// Runtime: 51 ms
// Memory: 55.5 MB
// Link: https://leetcode.com/problems/function-composition/

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    if (functions.length==0)
    {
        return function(x)
        {
            return x;
        }
    }
    return function(x) 
    {
        for (let i=functions.length-1;i>=0;i--)
        {
            x=functions[i](x);
        }
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
