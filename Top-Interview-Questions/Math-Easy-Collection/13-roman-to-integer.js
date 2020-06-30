/**
 * @param {string} s
 * @return {number}
 * Runtime: 164 ms, faster than 36.80% of JavaScript online submissions for Roman to Integer.
 * Memory Usage: 43.4 MB, less than 11.46% of JavaScript online submissions for Roman to Integer.
 */
var romanToInt = function(s) {
    if (!s || s.length === 0) {
        return 0;
    }

    const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);

    let i = s.length - 1;
    let result = map.get(s[i]);

    while (i > 0) {
        const curr = map.get(s[i]);
        const prev = map.get(s[i - 1]);

        if (prev >= curr) {
            result += prev;
        } else {
            result -= prev;
        }

        i--;
    }

    return result;
};