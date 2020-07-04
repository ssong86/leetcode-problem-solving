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

// Solution 2: Same Pattern for every 14th day
// TC: O(1) at most 14 times of loop
// SC: O(1) 8 cells are reserved
// Runtime: 8 ms, faster than 63.37%
// Memory Usage: 11.8 MB, less than 87.56%
class Solution {
    
    vector<int> nextDay;

public:
    vector<int> prisonAfterNDays(vector<int>& cells, int N) {
        
        if(N == 0)
            return cells;
        
        calculate(cells);
        N -= 1;
        
        for(int i = 0; i < N%14; i++){
            calculate(cells);
        }
        
        return cells;
    }
    
    void calculate(vector<int> &cells){
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
    
};

// Solution 3: Calculating Pattern Method
// TC:(number of days to reach the same result of Day 1)
// SC: O(1)
// Runtime: 8 ms, faster than 63.37%
// Memory Usage: 12 MB, less than 66.05%
class Solution {
    
    vector<int> nextDay;
    int pattern;
    
public:
    vector<int> prisonAfterNDays(vector<int>& cells, int N) {
        
        if(N == 0)
            return cells;
        
        calculate(cells);
        N -= 1;
        
        pattern = getPattern(cells);
        
        for(int i = 0; i < N%pattern; i++){
            calculate(cells);
        }
        
        return cells;
    }
    
    void calculate(vector<int> &cells){
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
    
    int getPattern(vector<int> cells){
        vector<int> initial = cells;
        int count = 1;
        
        calculate(cells);
        
        while(initial != cells){
            count++;
            calculate(cells);
        }
        
        return count;
    }
    
};

