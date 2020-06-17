// Solution #1 Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// TIME LIMIT EXCEEDED
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        
        if(!prices.size() || prices.size() == 1)
            return 0;
        
        int max_profit = INT_MIN;
        int buying;
        
        for(int i = 0; i < prices.size()-1; i++){
            buying = prices[i];
            
            for(int j = i+1; j < prices.size(); j++){
                max_profit = max(prices[j]-buying, max_profit);
            }
        }
        
        if(max_profit < 0)
            return 0;
        
        return max_profit;
    }
};

// Solution #2
// Time Complexity: O(n)
// Space Complexity: O(1)
// Runtime: 8 ms, faster than 88.02%
// Memory Usage: 13.2 MB, less than 27.33%
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int size = price.size();
        if(!size || size == 1)
            return 0;
        
        int max_profit = 0;
        int lowest = INT_MAX;
        
        for(int i = 0; i < size; i++){
            if(prices[i] < lowest){
                lowest = prices[i];
            }else{
                if(prices[i] - lowest > max_profit)
                    max_profit = prices[i] - lowest;
            }
        }
        
        return max_profit;
    }
};