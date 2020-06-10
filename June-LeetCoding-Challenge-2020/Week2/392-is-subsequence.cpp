// Time Complexity: O(max(s.length(), t.length()))
// Space Complexity: O(s.length())
// Runtime: 4 ms, faster than 85.40%
// Memory Usage: 6.5 MB, less than 84.45%
class Solution {
public:

 //s = "abc", t = "ahbgdc"
    bool isSubsequence(string s, string t) {
        
        if(s.length() > t.length())
            return false;
        
        if(!s.length())
            return true;
        
        if(!t.length())
            return false;
        
        queue<char> q;
        
        for(int i = 0; i < s.length(); i++){
            q.push(s[i]);
        }
        
        for(int i = 0; i < t.length(); i++){
            if(t[i] == q.front()){
                q.pop();
            }
        }
        
        return q.empty();
    }
};

// Time Complexity: O(t)
// Space Complexity: O(1)
// Runtime: 4 ms, faster than 84.88%
// Memory Usage: 6.3 MB, less than 95.10%
class Solution {
public:

    bool isSubsequence(string s, string t) {
        
        if(s.length() > t.length())
            return false;
        
        if(!s.length())
            return true;
        
        if(!t.length())
            return false;
        
        int pointer = 0;

        for(char comp : t){
            if(s[pointer] == comp){
                pointer++;
            }
        }
        
        return pointer == s.length();
    }
};