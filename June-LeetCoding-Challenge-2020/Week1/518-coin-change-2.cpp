// Time Complexity: O(coins count * amount)
// Space Complexity: O(amount + 1)
// Runtime: 12 ms, faster than 71.21%
// Memory Usage: 6.9 MB, less than 80.65%
class Solution {
public:
    int change(int amount, vector<int>& coins) {
        
        // amount 0 as initializer + [1,amount]
        int number_of_ways[amount+1];
        number_of_ways[0] = 1;
        
        // initialize amounts to 0 
        for(int i = 1; i <= amount; i++){
            number_of_ways[i] = 0;
        }
        
        for(int coin_index = 0; coin_index < coins.size(); coin_index++){
            for(int target_amount = 1; target_amount <= amount; target_amount++){
                if(target_amount >= coins[coin_index]){
                    number_of_ways[target_amount] += number_of_ways[target_amount - coins[coin_index]];
                }
            }
        }
        
        return number_of_ways[amount];
    }
};

class Solution {
public:
    int change(int amount, vector<int>& coins) {
        
        int table[amount+1];
        table[0] = 1;
        
        for(int i = 1; i <= amount; i++){
            table[i] = 0;
        }
        
        for(int i = 0; i < coins.size(); i++){
           for(int j = 1; j <= amount; j++){
               if(j >= coins[i])
                   table[j] += table[j - coins[i]];
           }
        }
        
        return table[amount];
    }
};