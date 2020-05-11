class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        /*
         * Time Complexity: O(n) 
         * Space Complexity: O(n)  
         */

        int n = nums.size();
        
        if(n == 0 || n == 1)
            return false;
        
        map<int, bool> a;

        for(int i = 0; i < n; i++){
            
            if(a[nums[i]] == true){
                return true;
            }
            
            a[nums[i]] = true;
        }
        
        return false;
    }
};