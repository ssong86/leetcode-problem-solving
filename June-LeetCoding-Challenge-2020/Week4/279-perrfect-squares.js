/**
 * @param {number} n
 * @return {number}
 * Runtime: 160 ms, faster than 69.96% of JavaScript online submissions for Perfect Squares.
 * Memory Usage: 42 MB, less than 31.67% of JavaScript online submissions for Perfect Squares.
 */
function numSquares(n) {
    const dp = [0];

    for (let i = 1; i <= n; i++) {
        dp[i] = Number.MAX_VALUE;

        for (let j = 1; j*j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j*j] + 1);
        }
    }

    return dp[n];
}