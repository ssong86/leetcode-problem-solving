// Solution #1 Botton Up Dynamic Programming
// TC: O(row*col size) has to traverse row*col
// SC: O(size of column) storing value
// Runtime: 8 ms, faster than 96.89%
// Memory Usage: 9.1 MB, less than 34.39%
class Solution {
public:
    
    int calculateMinimumHP(vector<vector<int> > &dungeon) {
        const int m = dungeon.size();
        const int n = dungeon[0].size();
        
        vector<int> dp(n + 1, INT_MAX);
        
        dp[n - 1] = 0; 
        
        for(int i = m - 1; i >= 0; i--)
            for(int j = n - 1; j >= 0; j--)
                dp[j] = min(dp[j], dp[j + 1]) - dungeon[i][j] >= 0 ? min(dp[j], dp[j + 1]) - dungeon[i][j] : 0;
        

        return dp[0] + 1;
    }

};