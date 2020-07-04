// Solution #1 XOR and Bit Shifting
// TC: O(1) 
// SC: O(1)
// Runtime: 4 ms, faster than 12.63%
// Memory Usage: 6.1 MB, less than 22.66% 
class Solution {
public:
    int hammingDistance(int x, int y) {
        int count = 0;
        
        int xorz = x ^ y;
        uint32_t mask = 1;
        
        for(int i = 0; i < 32; i++){
            
            if(xorz & mask)
                count++;
            
            mask <<= 1;
        }
            
        return count;
                
    }
};

// Solution #2 XOR Bit Operation Optimization
// TC: O(1) 
// SC: O(1)
// Runtime: 0 ms, faster than 100.00%
// Memory Usage: 5.9 MB, less than 58.95%
class Solution {
public:
    int hammingDistance(int x, int y) {
        int count = 0;
        
        int xorz = x ^ y;
        
        while(xorz != 0){
            count++;
            xorz &= xorz-1;
        }
        return count;
                
    }
};