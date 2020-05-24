/**
 * @param {string} str
 * @return {number}
 * I HATE THIS PROBLEM
 */

const INT_MIN = 1 << 31;
const INT_MAX = ~INT_MIN;

var myAtoi = function(str) {
    return Math.max(Math.min(parseInt(str) || 0, INT_MAX), INT_MIN)
};