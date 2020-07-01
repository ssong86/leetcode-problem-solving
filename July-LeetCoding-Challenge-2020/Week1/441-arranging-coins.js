/**
 * @param {number} n
 * @return {number}
 * Runtime: 96 ms, faster than 62.29% of JavaScript online submissions for Arranging Coins.
 * Memory Usage: 37.5 MB, less than 43.26% of JavaScript online submissions for Arranging Coins.
 */
var arrangeCoins = function(n) {
    if (n <= 1) {
        return n;
    }

    const totalSum = x => (x * (x + 1)) / 2;
    let x = 2;

    while (totalSum(x) <= n) {
        x++;
    }

    return x - 1;
};

/**
 * @param {number} n
 * @return {number}
 * Runtime: 88 ms, faster than 81.36% of JavaScript online submissions for Arranging Coins.
 * Memory Usage: 37.8 MB, less than 38.30% of JavaScript online submissions for Arranging Coins.
 * TC: O(logn)
 * SC: O(1)
 */
var arrangeCoins = function(n) {
    if (n <= 1) {
        return n;
    }

    const totalSum = x => x * (x + 1) / 2;

    let start = 0, end = n;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const sum = totalSum(mid);

        if (sum === n) {
            return mid;
        } else if (sum > n) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return end;
};