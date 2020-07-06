/**
 * @param {string} s
 * @return {number}
 * Runtime: 108 ms, faster than 61.48% of JavaScript online submissions for Longest Substring Without Repeating Characters.
 * Memory Usage: 39.1 MB, less than 78.61% of JavaScript online submissions for Longest Substring Without Repeating Characters.
 */
var lengthOfLongestSubstring = function(s) {
    if (!s || s.length === 0) {
        return 0;
    }

    let count = 0, maxCount = 0, start = 0;
    let map = new Map();

    for (let index = 0; index < s.length; index++) {
        const char = s.charAt(index);

        if (!map.has(char)) {
            count++;
        } else {
            maxCount = Math.max(maxCount, count);

            start = map.get(char) > start ? map.get(char) : start;
            count = index - start;
        }

        map.set(char, index);
    }

    return Math.max(maxCount, count);
};