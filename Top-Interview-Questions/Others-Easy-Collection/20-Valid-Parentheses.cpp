// Solution #1 Brute Force using HashMap
// TC: O(n)
// SC: O(n)
// Runtime: 4 ms, faster than 30.89% 
// Memory Usage: 6.3 MB, less than 50.66%
class Solution {
    
    stack<char> openP;
    map<char, char> pair{{')','('},{'}','{'}, {']', '['}};
    
public:
    
    bool isValid(string s) {
        
        int n = s.length();
        bool res;
        
        if(!n)
            return true;
        if(n%2)
            return false;
        
        if(!process(s,n))
            return false;
        
        if(!openP.empty())
            return false;
        
        return true;
    }
    
    bool process(string s, int n){
        
        for(int i = 0; i < n; i++){
            
            if(pair[s[i]]){
                
                if(openP.empty())
                    return false;
                else if(pair[s[i]] == openP.top())
                    openP.pop();
                else
                    return false;
            }else{
                openP.push(s[i]);
            }
            
        }
        
        return true;
    }
};