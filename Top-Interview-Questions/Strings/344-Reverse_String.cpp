// Time Complexity: O(n/2) => O(n)
// Space Complexity: O(1) in-place by swapping
// Runtime: 52 ms, faster than 79.86% 
// Memory Usage: 23.5 MB, less than 6.10%
class Solution {
public:
    void reverseString(vector<char>& s) {
        
        if(s.size() == 0 || s.size() == 1)
            return;
        
        for(int i = 0; i < s.size()/2; i++){
            swap(s[i],s[s.size()-i-1]);
        }
    }
};