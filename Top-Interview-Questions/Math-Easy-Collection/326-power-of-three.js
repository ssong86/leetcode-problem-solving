/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 208 ms, faster than 90.01% of JavaScript online submissions for Power of Three.
 * Memory Usage: 46.4 MB, less than 81.74% of JavaScript online submissions for Power of Three.
 * TC: O(logn), where base is 3
 * SC: O(1)
 */
var isPowerOfThree = function(n) {
    if (n <= 0) {
        return false;
    }

    while (n > 1) {
        if (n % 3 === 0) {
            n /= 3;
        } else {
            return false;
        }
    }

    return true;
};