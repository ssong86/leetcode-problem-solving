// Time Complexity: O(n-2 * m) where n is int n and m is length of each string passed as parameter
// Space Complexity: O(1) not considering result string
// Runtime: 4 ms, faster than 82.35%
// Memory Usage: 6.5 MB, less than 100.00%
class Solution {
public:
    
    string generateCAS(string input){
        int size = input.length();
        int count = 1;
        char pivot = input[0]; 
        
        string res = "";
        
        for(int i = 1; i < size; i++){
            if(input[i] == pivot){
                count++;
            }
            else{
                res += to_string(count) + pivot;
        
                pivot = input[i];
                count = 1;
            }
        }
        
        res += to_string(count) + pivot;
        
        return res;
    }
    
    string countAndSay(int n) {
        if(n < 1 || n > 30)
            return "";
        if(n == 1)
            return "1";
        if(n == 2)
            return "11";
        
        string res = "11"; 
        
        for(int i = 2; i < n; i++){
            res = generateCAS(res);
        }
        
        return res;
    }
};