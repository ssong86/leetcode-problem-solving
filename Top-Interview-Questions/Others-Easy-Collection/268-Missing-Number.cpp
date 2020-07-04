// Solution #1 Brute Force using HashMap
// TC: O(n)
// SC: O(n)
// Runtime: 200 ms, faster than 5.24%
// Memory Usage: 26 MB, less than 5.00% 
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        
        int n = nums.size();
        int highest = INT_MIN;
        
        for(int i = 0; i < n; i++)
            if(nums[i] > highest)
                highest = nums[i];
        
        map<int, bool> m;
        
        for(int i = 0; i <= n; i++){
            m[i] = false;
        }
        
        for(int i = 0; i < n; i++){
            m[nums[i]] = true;
        }
        
        for(int i = 0; i <= n; i++){
            if(!m[i])
                return i;
        }
        
        return -1;
    }
};