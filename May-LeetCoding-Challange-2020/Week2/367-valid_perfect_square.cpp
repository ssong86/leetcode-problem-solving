class Solution {
public:

    /* Time Complexity: O(logn)
     * Space Complexity: O(1)
     */
     
    bool isPerfectSquare(int num) {
        int a = 1;

        while(pow(a,2) <= num){
            
            if(pow(a,2) == num)
                return true;
            
            a++;
        }
        
        return false;
    }
};