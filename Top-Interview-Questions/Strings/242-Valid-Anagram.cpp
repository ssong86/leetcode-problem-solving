// Time Complexity: O(n) length of string
// Space complexity: O(1) only 26 characters * 2
// Runtime: 16 ms, faster than 72.28%
// Memory Usage: 7.5 MB, less than 100.00%

// Best Case: string is null or one
// Worst Case: string is longer than one character
class Solution {
public:
    bool isAnagram(string s, string t) {
        
        vector<int> a(26,0), b(26,0);
        
        if(s.length() != t.length())
            return false;
        
        for(int i = 0; i < s.length(); i++){
            a[s[i] - 'a']++;
            b[t[i] - 'a']++;
        }
                
        return a == b;
    }
};