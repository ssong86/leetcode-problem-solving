// First Solution: Brute Force
// Time Limit Exceeded.
// Time Complexity: O(n*m) length of s * length of p
// Space Complexity: O(1)
class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        
        vector<int> result;
        
        //check if each string is empty
        //check if p is larger than s
        if(!s.length() || p.length() > s.length() || !p.length()){
            return result;
        }
        
        map<char, int> temp;
        
        //add count of each alphabet of p
        for(int i = 0; i < p.length(); i++){
            temp[p[i]]++;
        }
        
        map<char, int> temp2;
        bool done = true;
        
        //check starting from each index
        for(int i = 0; i < s.length(); i++){
            temp2 = temp;    
            done = true;
            
            //until it reaches the end of string s
            if(!(p.length() > s.length() - i + 1)){
                
                //check each index if it has alphabet in p
                //if exists, decrement p
                for(int j = 0; j < p.length(); j++){
                    
                    if(temp2[s[i+j]]){
                        temp2[s[i+j]]--;
                    }else{
                        done = false;
                    }
                }
            
                //if exists, add to result
                if(done){
                    result.push_back(i);
                }
            }
        }
        
        return result;
    }
};

// First Solution: Sliding Window Algorithm
// Time Complexity: O(n) length of s
// Space Complexity: O(1) only 26 maps at most
// Runtime: 60 ms, faster than 33.12%
// Memory Usage: 8.6 MB, less than 100.00%
class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        
        vector<int> result;
        
        if(!s.length() || !p.length() || p.length() > s.length()){
            return result;
        }
        
        //create two vector array for each s and p
        vector<int> sMap(26,0), pMap(26,0);
        
        //get length of each
        int window = p.size();
        int size = s.size();
        
        //initializing starting window point and ending window point 
        int start = 0, end = 0;
        
        //add first window to vector
        while(end < window){
            pMap[p[end]-'a']++;
            sMap[s[end]-'a']++;
            end++;
        }
        
        //adjust end 
        end--;
        
        //loop until reaches the end of string
        while(end < size){
            
            //if alphabet count matches, add to vector
            if(sMap == pMap)
                result.push_back(start);
            
            //update window end point
            end++;
            
            //if it's not the end of string, add new end
            if(end < size)
                sMap[s[end]-'a']++;
            
            //remove old start point and update start point
            sMap[s[start]-'a']--;
            start++;
        }
        
        return result;

    }
};