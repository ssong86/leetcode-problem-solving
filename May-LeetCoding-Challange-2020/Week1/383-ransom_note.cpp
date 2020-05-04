class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        
        /* Time Complexity: O(n)
         * Space complexity: O(n)
        */
        map<char, int> a;
        
        if(magazine.length() < ransomNote.length())
            return false;

        
        for(char b : magazine){
             a[b]++;
        }
        
    
        for(char c : ransomNote){
            if(a[c] < 1){
                return false;
            }else{
                a[c]--;
            }
        }
        
        return true;
        
    }
};