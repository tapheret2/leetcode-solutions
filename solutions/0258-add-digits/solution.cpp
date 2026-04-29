// Problem: 258. Add Digits
// Difficulty: Easy
// Language: C++
// Runtime: 0 ms
// Memory: 8.7 MB
// Link: https://leetcode.com/problems/add-digits/

class Solution {
public:
    int addDigits(int num) {
        while(num>9)
        {
            int rem , ans = 0;
            while(num!=0)
            {
                rem = num % 10;
                num /= 10;
                ans += rem;
            }

            num = ans;
        }

        return num;
    }
};
