// TC: O(1)
// SC: O(1)
// Runtime: 0 ms, faster than 100.00%
// Memory Usage: 6.2 MB, less than 14.06%
class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        uint32_t res = 0;
        int mask = 1;
        
        for(int i = 0; i < 32; i++){
            if(mask & n)
                res += pow(2, 31-i);
            
            if(i != 31)
                mask <<= 1;
        }
        
        return res;
    }
};