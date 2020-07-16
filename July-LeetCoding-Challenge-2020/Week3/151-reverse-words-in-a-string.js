/**
 * @param {string} s
 * @return {string}
 * Runtime: 64 ms, faster than 83.16% of JavaScript online submissions for Reverse Words in a String.
 * Memory Usage: 37.5 MB, less than 21.29% of JavaScript online submissions for Reverse Words in a String.
 * TC: O(N), where N is length of s
 * SC: O(N), where N is length of s
 */
const SPACE = ' ';

var reverseWords = function(s) {
    const result = [];

    for (let i = s.length - 1; i >= 0; i--) {
        while (i >= 0 && s.charAt(i) === SPACE) {
            i--;
        }

        const wordEnd = i + 1;
        while (i >= 0 && s.charAt(i) !== SPACE) {
            i--;
        }

        const wordStart = i + 1;

        if (wordStart < wordEnd) {
            result.push(s.substring(wordStart, wordEnd));
        }
    }

    return result.join(SPACE);
};