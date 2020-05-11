class Solution {
public:
    int firstBadVersion(int n) {
        
        /*
         * Time Complexity: O(logn)
         * Space Complexity: O(1)
         * Median Formula: start + (end-start)/2
         * 
         */
        int start = 0;
        int end = n;
        int pivot = n;

        if(n == 1)
            return n;
        
        while(1){
            
            if(isBadVersion(pivot)){
                if(!isBadVersion(pivot-1))
                    return pivot;
                
                end = pivot;
                pivot = start + (end - start)/2;
                
            }else{
    
                start = pivot;
                pivot = start + (end - start)/2;
            }
        }
    }
};

class Solution {
public:
    int firstBadVersion(int n) {
        
        /*
         * 
         * TIME LIMIT EXCEEDED
         * Reason: Wrong formula for getting median 
         * 
         */
        
        int start = 0;
        int end = n;
        int pivot = n;
        
        if(n == 1)
            return n;
        
        while(1){
            
            if(isBadVersion(pivot)){
                if(!isBadVersion(pivot-1))
                    return pivot;
                
                pivot -= (pivot-start)/2;
                
            }else{
            
                pivot += (end-pivot)/2;
            }
        }
            
    }
};