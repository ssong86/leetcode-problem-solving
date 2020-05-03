class Solution {
public:
    int numJewelsInStones(string J, string S) {
        
        /*
         * USING MAP
         * 
         * Time Complexity: O(n+n) = O(n)
         * Space Complexity: O(n)
         * 
        */
        map<char, int> a;
        
        for(char s : S)
            a[s]++;

        int ret = 0;
        
        for(char j : J)
            ret += a[j];
        
        return ret;
    }
};

class Solution {
public:

    /*
    *  Time Complexity: O(n^2)
    *  Space Complexity: O(1)
    */
    int numJewelsInStones(string J, string S) {
        int count = 0;
        
        for(int i = 0; i < S.length(); i++){
            for(int j = 0; j < J.length(); j++){
                if(S[i] == J[j]){
                    count++;
                }
            }
        }

        return count;
    }
};