// Solution: Sliding Window
// Time Complexity: O(n) length of s2
// Space Complexity: O(1) only 26 alphabet at most
class Solution {
public:
    bool checkInclusion(string s1, string s2) {
        
        //SAME AS 438-find_all_anagrams_in_a_string
        if(!s1.length() || !s2.length() || s1.length() > s2.length())
           return false;
        
        int window = s1.length();
        int size = s2.length();
        
        vector<int> map1(26,0), map2(26,0);
        
        int start = 0, end = 0;
        
        while(end < window){
            map1[s1[end] - 'a']++;
            map2[s2[end] - 'a']++;
            end++;
        }
        
        end--;
        
        while(end < size){
            
            if(map1 == map2)
                return true;
                
            end++;
            
            if(end < size)
                map2[s2[end] - 'a']++;
            
            map2[s2[start] - 'a']--;
            start++;
        }
        
    
        return false;
        
    }
};