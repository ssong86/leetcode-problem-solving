/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * Runtime: 76 ms, faster than 53.93% of JavaScript online submissions for Pow(x, n).
 * Memory Usage: 37 MB, less than 11.79% of JavaScript online submissions for Pow(x, n).
 * TC: O(abs(logn))
 * SC: O(abs(logn))
 */
var myPow = function(x, n) {
    return n < 0 ? powHelper(1 / x, -n) : powHelper(x, n);
};

function powHelper (x, n) {
    if (n === 0) {
        return 1;
    }

    const half = powHelper(x, Math.floor(n / 2));

    return n % 2 === 0 ? half * half : half * half * x;
};