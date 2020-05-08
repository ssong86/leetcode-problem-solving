class Solution {
public:
    
    /* Time Complexity: O(n)
     * Space Complexity: O(n)
    */
    int majorityElement(vector<int>& nums) {
        int n = nums.size();
        
        if(n == 0 || n == 1){
            return nums[0];
        }
        
        map<int, int> a;
        int maj;
        
        for(int i = 0; i < n; i++){
            a[nums[i]]++;
            
            if(a[nums[i]] > n/2){
                maj = nums[i];
                return maj;
            }
        }
        
        return -1;
    }
};