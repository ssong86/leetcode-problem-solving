class Solution {
public:

    /*
    *
    *  Time Complexity: O(n^2)
    *  Space Complexity: O(1)
    * 
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