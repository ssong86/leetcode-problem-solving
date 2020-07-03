// Solution #1 DFS 
// TC: O(n*(r*c)*(r*c))
// SC: O(r*c)
// WRONG IMPLEMENTATION
class Solution {
    int row, col;
    bool exists;
    
    map<pair<int, int>, bool> goneThrough;
    
public:
    
    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
        
        vector<string> res; 
        int n = words.size();
        row = board.size(), col = board[0].size();
        
        for(int i = 0; i < n; i++){
            if(checkExists(board, words[i])){
                res.push_back(words[i]);
            }
        }
        
        return res;
    }
    
    bool checkExists(vector<vector<char>>& board, string word){
        
        for(int i = 0; i < row; i++)
            for(int j = 0; j < col; j++){
                if(board[i][j] == word[0]){


                    
                    exists = false;
                    goneThrough[{i,j}] = true;
                    if(findWord(board, word, 1, i, j))
                    
                    if(exists)
                        return true;
                }
                goneThrough.clear();
            }
        
        return false;
    }
    
    void findWord(vector<vector<char>>& board, string word, int charIndex, int r, int c){
        
        if(charIndex > word.length()-1){
            exists = true;
            return;
        }
        
        if(r-1 >= 0 && !goneThrough[{r-1,c}]){
           
            if(board[r-1][c] == word[charIndex]){
                    goneThrough[{r-1,c}] = true;
                    findWord(board, word, charIndex+1, r-1, c);
                    goneThrough[{r-1,c}] = false;

                }
        }
        
        if(r+1 < board.size() && !goneThrough[{r+1,c}]){

            if(board[r+1][c] == word[charIndex]){
                goneThrough[{r+1,c}] = true;
                findWord(board, word, charIndex+1, r+1, c);
            }
        }
        
        if(c-1 >= 0 && !goneThrough[{r,c-1}]){
            if(board[r][c-1] == word[charIndex]){
                goneThrough[{r,c-1}] = true;
                findWord(board, word, charIndex+1, r, c-1);
            }
        }
        
        if(c+1 < board[0].size() && !goneThrough[{r,c+1}]){
        
            if(board[r][c+1] == word[charIndex]){
                goneThrough[{r,c+1}] = true;
                findWord(board, word, charIndex+1, r, c+1);
            }
        }
    }
    
};


// Solution #1 DFS (Fixed)
// TC: O(n*(r*c)*(r*c))
// SC: O(r*c)
// TIME LIMIT EXCEEDED
class Solution {
    vector<string> res;
    map<pair<int,int>,bool> visited;
    
public:
    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
        
        if(!words.size() || !board.size() || !board[0].size())
            return {};
        
        
        for(int i = 0; i < words.size(); i++){
            if(wordExists(board, words[i], board.size(), board[0].size())){
                res.push_back(words[i]);
            }
        }
        
        return res;
    }
    
    bool wordExists(vector<vector<char>> &board, string word, int row, int col){
        
        for(int i = 0; i < row; i++){
            for(int j = 0; j < col; j++){
                if(DFS(board, word, 0, i, j))
                    return true;
                visited.clear();
            }
        }
        
        return false;
    }
                   
    bool DFS(vector<vector<char>> &board, string word, int index, int row, int col){
        
        if(index > word.length() -1){
            return true;
        }
        else if(row < 0 || row >= board.size() || col < 0 || col >= board[0].size()){
            return false;
        }
        else if(visited[{row,col}]){
            return false;
        }
        else if(board[row][col] != word[index]){
            return false;
        }
        
        visited[{row,col}] = true;
        
        if(DFS(board,word,index+1,row-1, col))
            return true;
        
        if(DFS(board,word,index+1,row+1, col))
            return true;
        
        if(DFS(board,word,index+1,row, col-1))
            return true;
        
        if(DFS(board,word,index+1,row, col+1))
            return true;
        
        visited[{row,col}] = false;
        
        return false;
    }
};