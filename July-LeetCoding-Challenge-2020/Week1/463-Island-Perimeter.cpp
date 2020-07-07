// Solution #1 DFS
// TC: O(n*m)
// SC: O(# of land tiles) # of land * 4
// Runtime: 708 ms, faster than 5.09% 
// Memory Usage: 109.2 MB, less than 5.02%
class Solution {
    vector<int> r{1,0,-1,0};
    vector<int> c{0,1,0,-1};
    
    set<pair<int,int>> s;
    
public:
    int islandPerimeter(vector<vector<int>>& grid) {
        int n = grid.size();
        int perimeter = 0;
        
        for(int i = 0; i < grid.size(); i++){
            for(int j = 0; j < grid[0].size(); j++){
                if(isLand(grid,i,j)){
                    getPerimeter(grid, i, j, perimeter);
                    return perimeter;
                }
            }
        }
        
        return -1;
    }
    
    void getPerimeter(vector<vector<int>> &grid, int row, int col, int &perimeter){
        
        if(isVisited(row,col)){
            return;
        }
        else if(isOutofBound(grid,row,col)){
            perimeter++;
            return;
            
        }else if(!isLand(grid,row,col)){
            perimeter++;
            return;
        } 
        
        s.insert({row,col});
        
        for(int i = 0; i < 4; i++)
            getPerimeter(grid, row + r[i], col + c[i], perimeter);
    }
    
    bool isOutofBound(vector<vector<int>> &grid, int row, int col){
        return !(row >= 0 && row < grid.size() && col >= 0 && col < grid[0].size());
    }
    
    bool isLand(vector<vector<int>> &grid, int row, int col){
        return grid[row][col];
    }
    
    bool isVisited(int row, int col){
        return s.count({row,col});
    }
};