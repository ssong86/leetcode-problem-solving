// TC: O(n)
// SC: O(1)
// Runtime: 0 ms, faster than 100.00%
// Memory Usage: 6 MB, less than 79.93%
class Solution {
public:
    int numTrees(int n) {
        long c = 1;
        
        for(int i = 1; i < n; i++){
            c = c*2*(2*i+1)/(i+2);
        }
        
        return c;
    }
};