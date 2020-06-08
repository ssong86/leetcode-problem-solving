// Time Complexity: O(logn)
// Space Complexity: O(1)
// Runtime: 4 ms, faster than 37.98%
// Memory Usage: 5.9 MB, less than 59.80%
class Solution {
public:
    bool isPowerOfTwo(int n) {

        if(n == 1)
            return true;
        
        int comp = 1;
        
        while(comp <= n){
            if(comp == n)
                return true;
            if(comp > INT_MAX/2)
                return false;
            comp *= 2;
        }
        
        return false;
    }
};