/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Runtime: 68 ms, faster than 81.22% of JavaScript online submissions for Valid Anagram.
 * Memory Usage: 39.3 MB, less than 18.37% of JavaScript online submissions for Valid Anagram.
 * TC: O(s.length + t.length) which is linear
 * SC: O(s.length)
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const map = {};

    for (const char of s) {
        map[char] = map[char] ? ++map[char] : 1;
    }

    for (const char of t) {
        if (!map[char]) {
            return false;
        } else if (map[char] === 0) {
            return false;
        } else {
            map[char]--;
        }
    }

    return true;
};