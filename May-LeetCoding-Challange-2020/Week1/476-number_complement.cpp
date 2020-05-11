class Solution {
public:
    int findComplement(int num) {
        
        /* Time Complexity: O(logn + 1) = O(logn)
         * Space Complexity: O(1)
        */
        int rem, result, count;
        count = result = 0;
        
        while(num/2 != 0){
            
            rem = num%2;
            
            if(rem == 0){
                result += pow(2,count);
            }
            count++;
            
            num /= 2;
        }
        

        if(num%2 == 0){
            result += pow(2,count);
        }
        
        
        return result;
    }
};