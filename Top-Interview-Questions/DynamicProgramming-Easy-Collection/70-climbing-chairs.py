class Solution:
    # Sol 1. DP
    def climbStairs(self, n: int) -> int:
        # we only can use 1 or 2 step
        if n == 1:
            return n
        
        dp = [0] * (n+1) # dp = [0] * n
        dp[1] = 1 # dp[0] = 1
        dp[2] = 2 # dp[1] = 2
        for i in range(3, n+1): # for i in range(2, n)
            dp[i] = dp[i-1] + dp[i-2]
        return dp[n] # return dp[n-1]
    # TC: O(n)
    # SC: O(n)
    # Runtime: 28 ms, faster than 74.05%

    # Sol 2. Fibonacci
    class Solution:
    def climbStairs(self, n: int) -> int:
        # we only can use 1 or 2 step
        if n == 1:
            return n
        one = 1
        two = 2
        for i in range(3,n+1):
            ret = one+two
            one = two
            two = ret
        
        return two
    # TC: O(n)
    # SC: O(1)