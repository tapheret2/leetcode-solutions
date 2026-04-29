// Problem: 13. Roman to Integer
// Difficulty: Easy
// Language: JavaScript
// Runtime: 2 ms
// Memory: 60.5 MB
// Link: https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // B1: map giá trị các ký tự
    const values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    // B2: duyệt từ trái sang phải
    for (let i = 0; i < s.length; i++) {
        const current = values[s[i]];
        const next = values[s[i + 1]]; // có thể undefined nếu i là cuối

        // Nếu có ký tự tiếp theo và current < next → trừ
        if (next !== undefined && current < next) {
            result -= current;
        } else {
            // ngược lại → cộng
            result += current;
        }
    }

    return result;
};
