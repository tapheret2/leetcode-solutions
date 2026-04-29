// Problem: 9. Palindrome Number
// Difficulty: Easy
// Language: C++
// Runtime: 0 ms
// Memory: 8.5 MB
// Link: https://leetcode.com/problems/palindrome-number/

class Solution {
public:
    bool isPalindrome(int x) {
        if (x<0)
        {
            return false;
        }
        long long temp=x;
        long long reversed=0;
        while (temp!=0)
        {
            int digit=temp%10;
            reversed=reversed*10+digit;
            temp/=10;
        }
        return (x==reversed);
        
    }
};
