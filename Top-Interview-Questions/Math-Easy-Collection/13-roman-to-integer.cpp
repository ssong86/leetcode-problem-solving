// Solution #1 Brute Force using Switch
// TC: O(1) 
// SC: O(1)
// Runtime: 12 ms, faster than 75.35%
// Memory Usage: 6.1 MB, less than 65.91%
class Solution {
    int index;
    int n;
    int res;    
    
public:
    
    int romanToInt(string s) {
        
        index = 0, res = 0;
        n = s.length()-1;
        
        while(index <= n){
            calculate(s);
            index++;
        }
        
        return res;
    }
    
    void calculate(string s){
        
        switch(s[index]){
            case 'I': checkNextofI(s); break;
            case 'V': res += 5; break;
            case 'X': checkNextofX(s); break;
            case 'L': res += 50; break;
            case 'C': checkNextofC(s); break; 
            case 'D': res += 500; break;
            case 'M': res += 1000; break;
            default: break;
        }
    }
    
    void checkNextofI(string s){
        char c = s[index+1];
        
        if(c == 'V'){
            res += 4;
            index++;
            
        }else if(c == 'X'){
            res += 9;
            index++;
            
        }else{
            res += 1;
        }
    }
    
    void checkNextofX(string s){
        char c = s[index+1];
        
        if(c == 'L'){
            res += 40;
            index++;
            
        }else if(c == 'C'){
            res += 90;
            index++;
            
        }else{
            res += 10;
        }
    }
    
    void checkNextofC(string s){
        char c = s[index+1];
        
        if(c == 'D'){
            res += 400;
            index++;
            
        }else if(c == 'M'){
            res += 900;
            index++;
            
        }else{
            res += 100;
        }        
    }
};

// Solution #2 Map
// TC: O(1) 
// SC: O(1) 7 Symbols to be stored in map
// Runtime: 12 ms, faster than 75.35%
// Memory Usage: 6.1 MB, less than 65.91%
class Solution {
    int index;
    int n;
    int res;    
    
    map<char, int> m{{'I',1}, {'V',5}, {'X', 10}, {'L',50}, {'C',100}, {'D',500}, {'M',1000}};
    
public:
    
    int romanToInt(string s) {
        
        index = 0, res = 0;
        n = s.length()-1;
        
        while(index <= n){
            
            if(index+1 <= n && m[s[index+1]] > m[s[index]]){
                res += m[s[index+1]] - m[s[index]];
                index++;
            }else{
                res += m[s[index]];
            }
            
            index++;
        }
        
        return res;
    }
    
    
};