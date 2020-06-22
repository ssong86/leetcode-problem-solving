// TC: O(n^2) in shuffled because of erase 
// SC: O(n) # of elements in nums
// Runtime: 184 ms, faster than 44.06%
// Memory Usage: 90.6 MB, less than 21.64%
class Solution {
public:
    vector<int> array;
    vector<int> shuffled;
    
    Solution(vector<int>& nums) {
        array = nums;
    }
    
    /** Resets the array to its original configuration and return it. */
    vector<int> reset() {
        return array;
    }
    
    /** Returns a random shuffling of the array. */
    vector<int> shuffle() {
        if(shuffled.size())
            shuffled.clear();
        
        vector<int> storage = array;
        
        while(storage.size()){
            
            int index = rand()%storage.size();
            shuffled.push_back(storage[index]);
            storage.erase(storage.begin()+index);
            
        }
        
        return shuffled;
        
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * Solution* obj = new Solution(nums);
 * vector<int> param_1 = obj->reset();
 * vector<int> param_2 = obj->shuffle();
 */