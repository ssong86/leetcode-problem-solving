// Time Complexity: O(logn) binary search tree
// Space Complexity: O(1)
// Runtime: 8 ms, faster than 71.15%
// Memory Usage: 9.7 MB, less than 41.13%
class Solution {
public:
    int getMiddle(int lower, int upper){
        return lower + (upper-lower)/2;
    }
    
    int searchInsert(vector<int>& nums, int target) {
        int lower, upper, mid;
        lower = 0;
        upper = nums.size()-1;
        
        
        while(lower <= upper){
            mid = getMiddle(lower, upper);
            
            if(target <= nums[mid]){
                upper = mid - 1;
            }else{
                lower = mid + 1;
            }        
        }
        
        return lower;
    }
};