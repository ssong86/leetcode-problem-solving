/**
 * @param {number} n
 * @return {boolean}
 * TC: O(logN)
 * SC: O(1)
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) {
        return false;
    }

    while (n > 1) {
        if (n % 2 === 1) {
            return false;
        }

        n >>= 1;
    }

    return true;
};

/**
 * @param {number} n
 * @return {boolean}
 * TC: O(1)
 * SC: O(1)
 */
var isPowerOfTwo = function(n) {
    return n > 0 && (n & n - 1) === 0;
};