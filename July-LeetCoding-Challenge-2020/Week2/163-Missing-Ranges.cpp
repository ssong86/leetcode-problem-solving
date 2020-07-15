// TC: O(n)
// SC: O(n) 
// Runtime: 0 ms, faster than 100.00%
// Memory Usage: 7.2 MB, less than 25.53%
class Solution {
    vector<string> res;
public:
    vector<string> findMissingRanges(vector<int>& nums, int lower, int upper) {
        vector<long> newNums;
        
        newNums.push_back((long)lower-1);
        
        for(long n : nums)
            newNums.push_back(n);
        
        newNums.push_back((long)upper+1);
            
            
        for(int i = 0; i < newNums.size()-1; i++){
            if(newNums[i+1] - newNums[i] == 2){
                res.push_back(to_string(newNums[i]+1));
            }
            else if(newNums[i+1] - newNums[i] > 1){
                res.push_back(to_string((newNums[i]+1))+"->"+to_string(newNums[i+1]-1));
            }
        }
        
        return res;
    }
};