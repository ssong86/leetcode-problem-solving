// Solution #1 Brute Force
// TC: O(n) N * 8 times of loop occurs
// SC: O(1) only 8 spaces are reserved
// TIME LIMIT EXCEEDED
class Solution {
    
    vector<int> nextDay;
    
public:
    vector<int> prisonAfterNDays(vector<int>& cells, int N) {
        

        for(int i = 0; i < N; i++){
            nextDay = cells;
            nextDay[0] = nextDay[7] = 0;
            
            for(int i = 1; i < 7; i++){ 
                if(!(cells[i-1] ^ cells[i+1]))
                    nextDay[i] = 1;
                else
                    nextDay[i] = 0;
            }
            cells = nextDay;
        }
        
        return cells;
    }
    
};