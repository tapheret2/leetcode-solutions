// Problem: 69. Sqrt(x)
// Difficulty: Easy
// Language: C++
// Runtime: 17 ms
// Memory: 8.6 MB
// Link: https://leetcode.com/problems/sqrtx/

class Solution {
public:
    int mySqrt(int x) {
        int res;
        for (long long i=0;i<=x;i++)
        {
            if (i*i>x)
            {
                res= i-1;
                break;
            }
            else if (i*i==x)
            {
                res=i;
                break;
            }
        }
        return res;
    }
};
