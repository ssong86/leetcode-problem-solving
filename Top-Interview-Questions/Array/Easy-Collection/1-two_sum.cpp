// First Solution: Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// Runtime: 1024 ms, faster than 5.04% 
// Memory Usage: 9.2 MB, less than 92.37%
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
        vector<int> temp;

        for(int i = 0; i < nums.size(); i++){ // pick first number for addition
            
            for(int j = i+1; j < nums.size(); j++){ // pick second number for addition
                
                if(target == nums[j] + nums[i]){ 
                    temp.push_back(i);
                    temp.push_back(j);
                }
            }
        }
        
        return temp;
    }
};


// Second Solution: Map + Vector
// Time Complexity: O(n)
// Space Complexity: O(n)
// Runtime: 32 ms, faster than 39.09%
// Memory Usage: 13 MB, less than 5.17%
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
        map<int, vector<int>> temp;
        vector<int> pair;
        
        for(int i = 0; i < nums.size(); i++){
            
            temp[nums[i]].push_back(i);
        }
        
        for(int i = 0; i < nums.size(); i++){
            
            if(temp[target-nums[i]].size()){
                
                if(target == 2*nums[i]){
                    if(temp[nums[i]].size() > 1){
                        pair.push_back(temp[nums[i]][0]);
                        pair.push_back(temp[nums[i]][1]);
                        return pair;
                    }
                } else if(temp[target-nums[i]].size()){
                    pair.push_back(temp[nums[i]][0]);
                    pair.push_back(temp[target-nums[i]][0]);
                    return pair;
                }
            }
        }
        
        return pair;
    }
};