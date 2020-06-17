// Time Complexity: O(n) ?  CONSTANT?!!
// Space Complexity: O(1) ? CONSTANT?!!
// Runtime: 4 ms, faster than 37.88%
// Memory Usage: 6.3 MB, less than 80.55%
class Solution {
public:
    string IPv4 = "IPv4";
    string IPv6 = "IPv6";
    string neither = "Neither";

    string validIPAddress(string IP) {
        
        if(count(IP.begin(), IP.end(), '.') == 3){
            return validateIPv4(IP);
            
        }else if(count(IP.begin(), IP.end(), ':') == 7){
            return validateIPv6(IP);
            
        }else{
            return neither;
        }
        
    }

    vector<string> split(string s, char c){
        vector<string> parts;
        string part;
        
        istringstream in(s);
        while(getline(in, part, c)){
            parts.push_back(part);
        }
        
        return parts;
    }
    
    string validateIPv4(string IP){
        vector<string> nums = split(IP, '.');
        
        if(nums.size() != 4)
            return neither;
        
        for(string num : nums){
            if(num.empty() || num.size() > 3 || (num.size() >= 2 && num[0] == '0'))
                return neither;
            
            for(char n : num) {
                if(!isdigit(n)){
                    return neither;
                }
            }
            
            if(stoi(num) > 255)
                return neither;
            
        }
        
        return IPv4;
    }
    
    string validateIPv6(string IP){
        vector<string> nums = split(IP, ':');
        
        if(nums.size() != 8)
            return neither;
        
        for(string num : nums){
            if(num.empty() || num.size() > 4)
                return neither;
            
            for(char n : num)
                if( (!isdigit(n) && (!isalpha(n))) || toupper(n) > 'F' )
                    return neither;
            
        }
        
        return IPv6;
    }
};