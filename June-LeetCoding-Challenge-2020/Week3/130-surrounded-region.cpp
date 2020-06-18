// Solution using DFS
// TC: O(n^2) has to go through all 
// SC: O(n)
// Runtime: 24 ms, faster than 96.98%
// Memory Usage: 10 MB, less than 96.37% 
class Solution {
public:
    int row, col;
    
    void DFS(vector<vector<char>> &board, int r, int c){
        
        if(r < 0 || r > row-1 || c < 0 || c > col-1 || board[r][c] != 'O')
            return;
        
        board[r][c] = 'B';
        
        DFS(board, r-1, c);
        DFS(board, r+1, c);
        DFS(board, r, c-1);
        DFS(board, r, c+1);
    }
    
    void solve(vector<vector<char>>& board) {
        
        if(!board.size())
            return;
        
        row = board.size();
        col = board[0].size();
        
        for(int i = 0; i < row; i++){
            DFS(board, i, 0);
            DFS(board, i, col-1);
        }
        
        for(int i = 0; i < col; i++){
            DFS(board, 0, i);
            DFS(board, row-1, i);
        }
        
        for(int i = 0; i < row; i++)
            for(int j = 0; j < col; j++){
                if(board[i][j] == 'B'){
                    board[i][j] = 'O';
                }else if(board[i][j] == 'O'){
                    board[i][j] = 'X';
                }
            }
        
    }
};