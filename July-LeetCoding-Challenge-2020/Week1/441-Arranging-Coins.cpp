// Solution #1 Brute Force
// TC: O(n)
// SC: O(1)
// Runtime: 8 ms, faster than 42.54%
// Memory Usage: 6.1 MB, less than 10.30%
class Solution {
public:
    
    int arrangeCoins(int n) {
        
        int res = 0;
        int coins = 1;
        
        while(1){
            
            n -= coins++;
            
            if(n >= 0){
               res++;
            }else{
                return res;
            }
        }
        
        return -1;
    }
};

// Solution #2 Math
// TC: O(1)
// SC: O(1)
// Runtime: 0 ms, faster than 100.00%
// Memory Usage: 5.9 MB, less than 56.91%
class Solution {
public:
    
    int arrangeCoins(int n) {
        
        return (-1 + sqrt(1 + (long)n*8))/2;
    }
};

// Solution #3 Binary Search
// TC: O(logn)
// SC: O(1)
// Runtime: 0 ms, faster than 100.00%
// Memory Usage: 5.9 MB, less than 56.91%
class Solution {
public:
    
    int arrangeCoins(int n) {
        
        long left = 1, right = n;
        long K;
        long coins;
        
        while(left <= right){
            K = (left + right)/2;
            coins = (K*(K+1))/2;
            
            if(coins > n){
                right = K - 1;
            }else{
                left = K + 1;
            }
        }
        
        return left-1;
    }
};