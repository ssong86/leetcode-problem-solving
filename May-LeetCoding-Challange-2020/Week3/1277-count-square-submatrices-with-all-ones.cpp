// Time Complexity: O(m*n)
// Space Compleixty: O(1)
// Runtime: 148 ms, faster than 34.48% 
// Memory Usage: 23.7 MB, less than 100.00%
class Solution {
public:
    int countSquares(vector<vector<int>>& matrix) {
        
        if(matrix.size() == 0)
            return 0;
        
        int count = 0;

        for(int i = 1; i < matrix.size(); i++){
            for(int j = 1; j < matrix[0].size(); j++){
                
                if(matrix[i][j] == 1){
                    matrix[i][j] += min(matrix[i-1][j-1],min(matrix[i-1][j], matrix[i][j-1]));
                    count += matrix[i][j];
                }
            }
        }
        
        count += matrix[0][0];
        
        for(int i = 1; i < matrix.size(); i++)
            count += matrix[i][0];
        
        
        for(int i = 1; i < matrix[0].size(); i++)
            count += matrix[0][i];
        
        return count;
    }
};