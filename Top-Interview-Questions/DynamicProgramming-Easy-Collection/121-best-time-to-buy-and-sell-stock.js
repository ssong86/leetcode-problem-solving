/**
 * @param {number[]} prices
 * @return {number}
 * Runtime: 64 ms, faster than 69.45% of JavaScript online submissions for Best Time to Buy and Sell Stock.
 * Memory Usage: 37.2 MB, less than 13.17% of JavaScript online submissions for Best Time to Buy and Sell Stock.
 * TC: O(N) where N is the number of elements in prices
 * SC: O(1)
 */
var maxProfit = function(prices) {
    if (!prices || prices.length === 0) {
        return 0;
    }

    let minSoFar = prices[0];
    let profit = 0;

    for (let index = 1; index < prices.length; index++) {
        if (prices[index] < prices[index - 1]) {
            minSoFar = Math.min(minSoFar, prices[index]);
        } else {
            profit = Math.max(profit, prices[index] - minSoFar);
        }

    }

    return profit;
};