// Time Complexity: O((n-m+1) * m) (haystack length - needle length + 1) * (needle length)
// Space Complexity: O(m)
// Runtime: 12 ms, faster than 12.68%
// Memory Usage: 7.3 MB, less than 100.00%
class Solution {
public:
    bool checkSame(string s1, string s2){
        
        for(int i = 0; i < s1.length(); i++){
            if(s1[i] != s2[i])
                return false;
        }
            
        return true;
    }
    int strStr(string haystack, string needle) {
        
        if(!needle.length())
            return 0;
        
        if(needle.length() > haystack.length())
            return -1;
        
        string checkString;
        int start_index;
        
        for(int i = 0; i < haystack.length()-needle.length()+1; i++){
            
            start_index = i;
            checkString = "";
            
            for(int j = start_index; j < start_index + needle.length(); j++){
                checkString += haystack[j];
            }
            
            if(checkSame(checkString, needle))
                return start_index;
        }
        
        return -1;
    }
};
