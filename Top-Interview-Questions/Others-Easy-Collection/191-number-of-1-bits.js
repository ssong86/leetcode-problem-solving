/**
 * @param {number} n - a positive integer
 * @return {number}
 * Runtime: 72 ms, faster than 72.24% of JavaScript online submissions for Number of 1 Bits.
 * Memory Usage: 36 MB, less than 32.63% of JavaScript online submissions for Number of 1 Bits.
 * TC: O(1)
 * SC: O(1)
 */
var hammingWeight = function(n) {
    let count = 0;

    while (n !== 0) {
        n &= n - 1;
        count++;
    }

    return count;
};