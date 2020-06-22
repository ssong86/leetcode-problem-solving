// Solution #1 Brute Force, traverse and track all numbers and find one with count 1
// TC: O(n) traverse vector once and map once at most
// SC: O(number of keys) number of keys to be stored 
// Runtime: 24 ms, faster than 18.94%
// Memory Usage: 10.3 MB, less than 7.28%
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        
        map<int, int> map;
        int n = nums.size();
        
        for(int i = 0; i < n; i++){
            map[nums[i]]++;
        }
        
        int res;
        
        for(auto it : map){
            if(it.second == 1){
                res = it.first;
                break;
            }
        }
        
        return res;
    }
};