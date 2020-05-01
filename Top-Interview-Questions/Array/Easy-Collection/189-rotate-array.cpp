    void rotate(vector<int>& nums, int k) {

        k = k%nums.size();
        
        if(k == 0)
            return;
        
        int startIndex = nums.size() - k;
        vector<int> a;
        
        for(int i = startIndex; i <= nums.size()-1; i++){
            a.push_back(nums[i]);
            
        }
        
        for(int i = 0; i < startIndex; i++){
            a.push_back(nums[i]);
        }
        
        nums = a;
    }


    // Time Complexity O(n)
    // Space Complexity O(n)