// Time Complexity: O(smallest length of string * number of strings)
// Space Complexity: O(smallest length of string)
// Runtime: 8 ms, faster than 50.55%
// Memory Usage: 9.1 MB, less than 6.45%
class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        
        if(!strs.size())
            return "";
        
        if(strs.size() == 1){
            return strs[0];
        }
        
        int length = strs[0].length();
        char comp;
            
        for(int i = 1; i < strs.size(); i++){
            length = strs[i].length() < length ? strs[i].length() : length;
        }
        
        if(length < 1)
            return "";
        
        char *res = new char[length+1]();       
        int count = 0;
        
        for(int i = 0; i < length; i++){
            comp = strs[0][i];
            
            for(int j = 1; j < strs.size(); j++){                    
                if(comp != strs[j][i])
                    return res;
            }
            res[count++] = comp;
        }
        
        
        return res;
    }
};