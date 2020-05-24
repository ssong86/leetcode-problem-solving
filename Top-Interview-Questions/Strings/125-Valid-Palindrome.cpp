// Time Complexity: O(n) length of string s
// Space Complexity: O(m) length of alphanumberic characters in s
// Runtime: 16 ms, faster than 26.69% 
// Memory Usage: 7.5 MB, less than 100.00%

// Best Case: string is null or one character
// Worst Case: string is more than one character
class Solution {
public:
    bool isPalindrome(string s) {
        
        if(s.length() == 0 || s.length() == 1){
            return true;
        }
        
        string temp = "";
        
        for(int i = 0; i < s.length(); i++){
            if(isalnum(s[i])){
                if(isalpha(s[i])){
                    temp+= tolower(s[i]);
                }else{
                    temp+=s[i];
                }
            }  
        }
        cout << temp << endl;
        
        for(int i = 0; i < temp.length()/2; i++){
            if(temp[i] != temp[temp.length() - 1 - i])
                return false;
        }
        
        return true;
    }
};