/**
 * @param {string} str
 * @return {number}
 * I HATE THIS PROBLEM
 * Runtime: 88 ms, faster than 29.78% of JavaScript online submissions for String to Integer (atoi).
 * Memory Usage: 37.3 MB, less than 14.29% of JavaScript online submissions for String to Integer (atoi).
 */

const INT_MIN = 1 << 31;
const INT_MAX = ~INT_MIN;

var myAtoi = function(str) {
    return Math.max(Math.min(parseInt(str) || 0, INT_MAX), INT_MIN)
};