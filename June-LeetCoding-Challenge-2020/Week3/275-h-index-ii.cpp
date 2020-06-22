// Binary Search
// TC: O(logn)
// SC: O(1)
// Runtime: 48 ms, faster than 24.56%
// Memory Usage: 18.6 MB, less than 80.32%
class Solution {
public:
    
    int hIndex(vector<int>& citations) {
        int n = citations.size();
        if(!n)
            return 0;
        int left = 0, right = n - 1;
        int mid;

        int res = 0;
        while(left <= right){
             mid = (left+right)/2;
            
            if(citations[mid] >= n - mid){
                res = n - mid;
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
        
        return res;

    }
};