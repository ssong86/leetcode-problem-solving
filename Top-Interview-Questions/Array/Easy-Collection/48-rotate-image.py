class Solution:
    # Sol 1. Swapping Matrix Element
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        n = len(matrix)
        for i in range(n):
            for j in range(i, n):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        
        for i in range(n):
            matrix[i].reverse()
        # Time Complexity: O(n^2)
        # Space Complexity: O(1)
        # Run Code Runtime: 44 ms
        # Submit Runtime: 56 ms, 10.18% faster.
        # Submit Memory: 13.9 mb, 6.25% less.
