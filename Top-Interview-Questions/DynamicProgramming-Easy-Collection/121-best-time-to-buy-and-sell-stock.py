class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy, sell = float('inf'), 0
        for p in prices:
            buy, sell = min(buy, p), max(sell, p-buy)
        return sell
    # TC: O(n), n is the length of prices list
    # SC: O(1)
    # Runtime: 68 ms, faster than 51.98%
    # Memory Usage: 15.1 MB, less than 74.89%