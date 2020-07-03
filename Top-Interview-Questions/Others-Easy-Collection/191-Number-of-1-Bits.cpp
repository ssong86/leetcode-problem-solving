// Solution #1 Bit Shifting 
// TC: O(1) loop occurs 32 times to check each bit
// SC: O(1)
// Runtime: 0 ms, faster than 100.00%
// Memory Usage: 6 MB, less than 48.84%
class Solution {
public:
    int hammingWeight(uint32_t n) {
        
        int count = 0;
        uint32_t mask = 1;
        
        for(int i = 0; i < 32; i++){
            
            if(n & mask)
                count++;
            
            mask <<= 1;
        }
        
        return count;
    }
};

// Solution #2 Bit Shifting [Optimized] 
// TC: O(1) loop occurs the number of '1' bits
// SC: O(1)
// Runtime: 4 ms, faster than 50.42% 
// Memory Usage: 6.1 MB, less than 39.52%
class Solution {
public:
    int hammingWeight(uint32_t n) {
        
        int count = 0;
        
        while(n){
            
            count++;
            n &= n-1;
        }
        
        return count;
    }
};