class Solution {
public:
    int firstUniqChar(string s) {

        /* Time Complexity: O(n)
         * Space Complexity: O(n)
        */
        
        map<char, int> b;
        
        for(int i = 0; i < s.length(); i++){ //create map with count 
            b[s[i]]++;
        }
        
        for(int i = 0; i < s.length(); i++){ //return first char with count 1
            if(b[s[i]] == 1){
                return i;
            }
        }
        
        return -1; //no unique char found
    }
};