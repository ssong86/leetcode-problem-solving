class Solution:
    # Sol 1. DP
    def countSquares(self, matrix: List[List[int]]) -> int:
        n = len(matrix) # # of rows
        print(n)
        m = len(matrix[0]) # # of cols
        print(m)
        count = 0
        dp_matrix = [[0 for j in range(m+1)] for i in range(n+1)]
        print(dp_matrix)
        for row in range(1,n+1):
            for col in range(1, m+1):
                if matrix[row-1][col-1] == 1:
                    dp_matrix[row][col] = 1+ min(dp_matrix[row][col-1], dp_matrix[row-1][col], dp_matrix[row-1][col-1])
                    count += dp_matrix[row][col]
                    
        return count
        # Time Complexity: O(n^2)
        # Space Complexity: O(nm)
        # Run Code Runtime: 48 ms
        # Submit Runtime: 724 ms, 35.47% faster
        # Submti Memory: 15.8 mb, 100% less 