class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        
        /* Time Complexity: O(n)
         * Space Complexity: O(n)
        */
        vector<int> a;
        
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] == 0){
                a.push_back(i); //push indexes of 0
            }
        }

        if(nums.size() == a.size()) //if all 0, return
            return;
        
        
        for(int i = 0; i < a.size(); i++){ //remove and push_back each 0
            nums.erase(nums.begin() + a[i] - i);
            nums.push_back(0);
        }
        
        
    }
};