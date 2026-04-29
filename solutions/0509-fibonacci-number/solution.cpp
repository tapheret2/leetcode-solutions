// Problem: 509. Fibonacci Number
// Difficulty: Easy
// Language: C++
// Runtime: 14 ms
// Memory: 7.6 MB
// Link: https://leetcode.com/problems/fibonacci-number/

class Solution {
public:
    int fib(int n) {
        if (n==0)
        {
            return 0;
        }
        if (n==1)
        {
            return 1;
        }
        return fib(n-2) + fib(n-1);
    }
};
