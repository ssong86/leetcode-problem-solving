// TC: O(n)
// SC: O(1)
// Runtime: 0 ms, faster than 100.00% 
// Memory Usage: 6.6 MB, less than 35.20%
class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        
        if(!numRows)
            return {};
        
        if(numRows == 1)
            return {{1}};
        
        if(numRows == 2)
            return {{1},{1,1}};
        
        vector<vector<int>> res;
        
        res.push_back({1});
        res.push_back({1,1});
        
        for(int i = 2; i < numRows; i++){
            vector<int> row;
            
            for(int j = 0; j < i+1; j++){
                if(j == 0){
                    row.push_back(1);
                }else if(j == i){
                    row.push_back(1);
                }else{
                    row.push_back(res[i-1][j-1] + res[i-1][j]);
                }
            }
            
            res.push_back(row);
        }
        
        return res;
    }
};