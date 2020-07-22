// Solution #1 Depth First Search
// TC: O(# of row * # of col * 4^(length of word))
// SC: O(length of word)
// Runtime: 412 ms, faster than 21.52%
// Memory Usage: 43.1 MB, less than 45.66%
class Solution {
    vector<int> row{0,1,0,-1}, col{1,0,-1,0};
    map<pair<int,int>, bool> visited;
public:
    
    bool exist(vector<vector<char>>& board, string word) {
                
        for(int i = 0; i < board.size(); i++)
            for(int j = 0; j < board[0].size(); j++)
                if(board[i][j] == word[0]){
                    if(wordExists(board, word, i, j, 0))
                        return true;
                    visited.clear();
                }
                    
        return false;
    }
    
    bool wordExists(vector<vector<char>> &board, string word, int i, int j, int index){
        if(index >= word.length())
            return true;
        if(!isInBound(board,i,j) || !isCharMatch(board[i][j],word[index]) || visited[{i,j}])
            return false;
        
        visited[{i,j}] = true;
        bool res = false;
        
        for(int k = 0; k < 4; k++){
            res = wordExists(board, word, i+row[k], j+col[k], index+1);
            if(res)
                break;
        }
        
        visited[{i,j}] = false;
        return res;
    }
    
    bool isInBound(vector<vector<char>> &board, int i, int j){
        return i >= 0 && i < board.size() && j >= 0 && j < board[0].size();
    }
    
    bool isCharMatch(char c, char w){
        return c == w;
    }
};