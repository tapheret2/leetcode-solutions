// Problem: 2621. Sleep
// Difficulty: Easy
// Language: JavaScript
// Runtime: 41 ms
// Memory: 54.2 MB
// Link: https://leetcode.com/problems/sleep/

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    await new Promise(resolve=>setTimeout(resolve,millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
