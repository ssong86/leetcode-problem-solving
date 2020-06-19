class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        if not board:
            return 
        height = len(board)
        width = len(board[0])
        
        def checkO(r,c):
            if 0<=r<height and 0<=c<width and board[r][c] == 'O': # within in the boundary
                board[r][c] = 'C'
                checkO(r-1,c)
                checkO(r+1,c)
                checkO(r,c-1)
                checkO(r,c+1)

        for r in [0,height-1]: # first row, last row
            for c in range(width):
                checkO(r,c)
        for c in [0,width-1]: # first col, last col
            for r in range(height):
                checkO(r,c)
        for r in range(height):
            for c in range(width):
                if board[r][c] == 'C':
                    board[r][c] = 'O'            
                elif board[r][c] == 'O':
                    board[r][c] = 'X'
    # TC: O(H*W)
    # SC: O(N), n = h + w if anything contains O on the boundary
    # Runtime: 148 ms, faster than 55.81% 
    # Memory Usage: 15.6 MB, less than 34.04%  