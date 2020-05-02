class Solution {
public:
    int firstBadVersion(int n) {
        
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