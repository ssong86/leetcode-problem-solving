// TC: O(m*n)
// SC: O(m*n)
// Runtime: 8 ms, faster than 14.01%
// Memory Usage: 6.1 MB, less than 66.14%
class Solution {
public:
    int uniquePaths(int m, int n) {
        
        int array[m][n];
        
        array[0][0] = 1;
        
        for(int i = 1; i < m; i++)
            array[i][0] = 1;
        
        for(int i = 1; i < n; i++)
            array[0][i] = 1;
        
        for(int i = 1; i < m; i++)
            for(int j = 1; j < n; j++){
                array[i][j] = array[i-1][j] + array[i][j-1];
            }
        
        return array[m-1][n-1];
                
    }
};