class Solution:
    # Sol 1. Using flags 
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        n = len(matrix)
        m = len(matrix[0])
        flag = False # To set the first row and col 0
        # Need to set row and col flags to be false because
        # we don't need to care about the first row and col
        row_flag = False
        col_flag = False
        if matrix[0][0] == 0:
            flag = True

        # Start iterations from index of 1 in each row and col
        # To change the col and row flags value to be true
        for i in range(1,n):
            if matrix[i][0] == 0:
                col_flag = True
                break
        for j in range(1,m):
            if matrix[0][j] == 0:
                row_flag = True
                break
        
        # Start changing values of the matrix inside the border line
        for i in range(1,n):
            for j in range(1,m):
                if matrix[i][j] == 0:
                    matrix[i][0] = 0
                    matrix[0][j] = 0
        for i in range(1,n):
            for j in range(1,m):
                if (matrix[i][0] == 0) or (matrix[0][j] == 0):
                    matrix[i][j] = 0
        # Flag values
        if flag:
            for i in range(n):
                matrix[i][0] = 0
            for j in range(m):
                matrix[0][j] = 0
        else: # row and col
            if col_flag:
                for i in range(n):
                    matrix[i][0] = 0
            if row_flag:
                for j in range(m):
                    matrix[0][j] = 0
    # Time Complexity: O(n) + O(m) + O(n*m) + O(n*m) + O(n) + O(m) + O(n) + O(m) = O(n*m)
    # Space Complexity: O(1), no additional space
    # Run Code Runtime: 32 ms
    # Submit Runtime: 188 ms, 9.65% faster
    # Submit Memoryy: 14.4 mb, 5.13% less