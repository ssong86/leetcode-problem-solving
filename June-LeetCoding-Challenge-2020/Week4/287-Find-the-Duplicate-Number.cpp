// TC: O(nlogn) sorting takes nlogn time on average
// SC: O(1) not using extra memory that is related to number of nums
// Runtime: 36 ms, faster than 12.80%
// Memory Usage: 11 MB, less than 89.51%

// Best Case: nums is already sorted and first two elements are the same
// Worst Case: reversely sorted and last two elemnents are the same
class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        int n = nums.size();
        
        sort(nums.begin(), nums.end(), [](int &a, int &b){
           return a < b; 
        });
        
        int prev = nums[0];
        
        for(int i = 1; i < n; i++){
            if(prev == nums[i]){
                return prev;
            }
            else{
                prev = nums[i];
            }
        }
        
        return -1;
    }
};