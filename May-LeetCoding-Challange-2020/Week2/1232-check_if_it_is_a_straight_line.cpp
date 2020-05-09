class Solution {
public:
    
    /* Time Complexity: O(n)
     * Space Complexity: O(1)
    */
    bool checkStraightLine(vector<vector<int>> &coordinates) {
        
        if(coordinates.size() == 2){
            return true;
        }
        
        int n = coordinates.size()-1;
        
        int x, y, x1, y1, x2, y2;
        x = coordinates[0][0];
        y = coordinates[0][1];
        x1 = coordinates[1][0];
        y1 = coordinates[1][1];
        
        for(int i = 2; i < n; i++){
            x2 = coordinates[i][0];
            y2 = coordinates[i][1];
            
            if((y1-y)*(x2-x1) != (y2-y1)*(x1-x))
                return false;
        }
        
        return true;
    }
};

// Sol 2. idk what the fk this is.
class Solution {
public:
    bool checkStraightLine(vector<vector<int>>& cd) {
        double  m = (double)(cd[1][1] - cd[0][1]) / (cd[1][0] - cd[0][0]),
                c = (double)cd[0][1] - (m * cd[0][0]);
        
        for (auto x : cd) if (x[1] != m * x[0] + c) return false;
        return true;
    }
};