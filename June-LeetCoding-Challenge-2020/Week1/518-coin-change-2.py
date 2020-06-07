class Solution:
    # Sol 1. DP
    def change(self, amount: int, coins: List[int]) -> int:
        dp = [0] * (amount + 1)
        dp[0] = 1
        #print(dp)
        for coin in coins:
            #print(coin)
            for x in range(coin, amount + 1):
                dp[x] += dp[x - coin]
                #print(dp)
        return dp[amount]
    # TC: O(nm), where n is the length of coins, m is amount 
    # SC: O(m+1)
    # Runtime: 136 ms, faster than 90.14%
    # Memory Usage: 14 MB, less than 65.82%.