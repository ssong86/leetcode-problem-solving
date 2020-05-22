// First Solution
// Time Complexity: O(n*m) length of n * length of m
// Space Complexity: O(n+m)
//Runtime: 56 ms, faster than 12.19%
//Memory Usage: 13.6 MB, less than 7.41%
class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        
        map<int, int> row, col;
        
        for(int i = 0; i < matrix.size(); i++){
            for(int j = 0; j < matrix[i].size(); j++){
                if(matrix[i][j] == 0){
                    row[i]++;
                    col[j]++;
                }
            }    
        }
        
        for(int i = 0; i < matrix.size() ; i++){
            for(int j = 0; j < matrix[i].size(); j++){
                if(row[i] > 0 || col[j] > 0)
                    matrix[i][j] = 0;
            }
        }
    }
};