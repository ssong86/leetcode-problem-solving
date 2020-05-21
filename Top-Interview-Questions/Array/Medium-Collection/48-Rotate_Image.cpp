// Time Complexity: O(n^n)
// Space Complexity: O(1)
// Runtime: 0 ms, faster than 100.00%
// Memory Usage: 7.4 MB, less than 100.00%

// Best Case == Worst Case
class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        
        
        int a,b;
        
        a = 0;
        b = matrix.size()-1;
        
        while(a<b){
            for(int i = 0; i < b-a; i++){
                
                swap(matrix[a][a+i], matrix[a+i][b]);
                swap(matrix[a][a+i], matrix[b][b-i]);
                swap(matrix[a][a+i], matrix[b-i][a]);
            }
            a++;
            b--;
        }
        
        
    }
};