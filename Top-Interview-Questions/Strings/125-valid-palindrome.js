/**
 * @param {string} s
 * @return {boolean}
 * Runtime: 76 ms, faster than 51.05% of JavaScript online submissions for Valid Palindrome.
 * Memory Usage: 38.3 MB, less than 39.13% of JavaScript online submissions for Valid Palindrome.
 * TC: O(s.length)
 * SC: O(s.length), which can be improved to O(1)
 */

const ALPHANUMERIC_CODES_START = ["0".charCodeAt(0), "a".charCodeAt(0)];
const ALPHANUMERIC_CODES_END = ["9".charCodeAt(0), "z".charCodeAt(0)];


var isPalindrome = function(s) {
    if (!s) {
        return true;
    }

    const lower = s.toLowerCase();
    let start = 0, end = lower.length - 1;

    while (start < end) {
        while (start < end && !isAlphaNumeric(lower.charAt(start))) {
            start++;
        }

        while (start < end && !isAlphaNumeric(lower.charAt(end))) {
            end--;
        }

        if (start < end && lower.charAt(start) !== lower.charAt(end)) {
            return false;
        } else {
            start++;
            end--;
        }
    }

    return true;
};

function isAlphaNumeric (char) {
    const code = char.charCodeAt(0);

    for (let index = 0; index < 2; index++) {
        if (code >= ALPHANUMERIC_CODES_START[index] && code <= ALPHANUMERIC_CODES_END[index]) {
            return true;
        }
    }

    return false;
}

console.log(isPalindrome(".,"));