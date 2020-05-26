class Solution:
    def maxUncrossedLines(self, A: List[int], B: List[int]) -> int:
        N = len(A)
        M = len(B)
        
        dp = [[0 for n in range(N+1)] for m in range(M+1)]
        
        for j in range(1,M+1):
            for i in range(1, N+1):
                if A[i-1] == B[j-1]:
                    dp[j][i] = 1 + dp[j-1][i-1]
                else:
                    dp[j][i] = max(dp[j][i-1], dp[j-1][i])
        return dp[j][i]

        # Time Complexity: O(n*m), where n, m are the size of A and B
        # Space Complexity: O(n+1 * m+1) => O(n*m)
        # Submit Runtime: 244 ms, 58.08% faster
        # Submit Memory: 13.9 MB, 46.81% less
                