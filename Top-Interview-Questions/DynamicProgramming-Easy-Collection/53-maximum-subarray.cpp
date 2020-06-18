// TC: O(n)
// SC: O()
// Runtime: 12 ms, faster than 64.48%
// Memory Usage: 13.4 MB, less than 22.87%
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        
        if(!nums.size())
            return 0;
        
        int max = INT_MIN, sum = 0;
        
        for(int i = 0; i < nums.size(); i++){
            sum += nums[i];
            
            if(sum > max)
                max = sum;
            
            if(sum < 0)
                sum = 0;
        }
        
        return max;
    }
};