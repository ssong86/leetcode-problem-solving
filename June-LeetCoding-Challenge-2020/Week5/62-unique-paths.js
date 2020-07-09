/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * Runtime: 68 ms, faster than 57.22% of JavaScript online submissions for Unique Paths.
 * Memory Usage: 34 MB, less than 55.77% of JavaScript online submissions for Unique Paths.
 * TC: O(m * n)
 * SC: O(m * n)
 */
var uniquePaths = function(m, n) {
    const dp = [];

    for (let i = 0; i < m; i++) {
        dp[i] = [1];
    }

    for (let i = 1; i < n; i++) {
        dp[0][i] = 1;
    }

    for (let col = 1; col < m; col++) {
        for (let row = 1; row < n; row++) {
            dp[col][row] = dp[col - 1][row] + dp[col][row - 1];
        }
    }

    return dp[m - 1][n - 1];
};

