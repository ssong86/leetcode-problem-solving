// TC: O(length of string without leading and trailing spaces)
// SC: O(number of words) Except for string variable to string reversed string
// Runtime: 16 ms, faster than 85.71%
// Memory Usage: 9.3 MB, less than 28.19%
class Solution {
public:
    string reverseWords(string s) {
        
        int leading = countLeadingSpace(s);
        int trailing = countTrailingSpace(s);
                
        vector<string> words = getWords(s, leading, trailing);
        
        return reverseWords(words);
    }
    
    // TC: O(# of leading spaces)
    int countLeadingSpace(string s){
        int count = 0;
        
        for(int i = 0; i < s.length(); i++){
            if(s[i] != ' ')
                break;
            count++;
        }
        
        return count;
    }
    
    // TC: O(# of trailing spaces)
    int countTrailingSpace(string s){
        int count = 0;
                
        for(int i = s.length()-1; i >= 0; i--){
            if(s[i] != ' ')
                break;
            count++;
        }
        
        return count;
    }

    // TC: O(length of string without leading & trailing spaces)
    vector<string> getWords(string s, int leading, int trailing){
        vector<string> words;
        int start = leading;
        int count = 0;
        
        for(int i = leading; i < s.length()-trailing; i++){
            
            if(s[i] == ' ' && count > 0){
                words.push_back(s.substr(start, count));
                count = 0;
                start = i+1;
            }
            else{
                if(s[i] != ' ')
                    count++;
                else
                    start = i+1;
            }
        }
        
        words.push_back(s.substr(start, count));
        
        return words;
    }
    
    // TC: O(number of words in a string)
    string reverseWords(vector<string> words){
        string res = "";
        
        for(int i = words.size()-1; i >= 0; i--){
            res += words[i];
            if(i != 0)
                res += " ";
        }
        
        return res;
    }
};