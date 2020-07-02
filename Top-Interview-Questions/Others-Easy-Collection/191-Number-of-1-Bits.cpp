// Solution #1 Bit Shifting 
// TC: O(1)
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