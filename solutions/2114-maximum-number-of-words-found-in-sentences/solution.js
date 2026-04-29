// Problem: 2114. Maximum Number of Words Found in Sentences
// Difficulty: Easy
// Language: JavaScript
// Runtime: 0 ms
// Memory: 57.5 MB
// Link: https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    var max =0;
    for(var i=0;i<sentences.length;i++)  {
        var cnt=sentences[i].split(" ").length;
            
        if(cnt>max) max = cnt;
        }
    return max;
};
