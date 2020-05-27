// Time Complexity: O(n^2) 
// Space Complexity: O(1)
// Runtime Error: Buffer Overflow
// Reason: ?
class Solution {
public:
    
    int findMaxLength(vector<int>& nums) {
        
        int counter, res = 0, zeroes, ones;
        
        for(int i = 0; i < nums.size(); i++){
            
            counter = i;
            zeroes = 0, ones = 0;
            
            if(nums[counter] == 0){
                zeroes++;
                
                while(nums[++counter] == 0 && counter < nums.size())
                    zeroes++;
                
                ones++;
                
                while(nums[++counter] == 1 && counter < nums.size())
                    ones++;
                
                if(zeroes == ones)
                    res = zeroes > res ? zeroes : res;
            
            }
            else {
                ones++;
                
                while(nums[++counter] == 1 && counter < nums.size())
                    ones++;
                
                zeroes++;
                
                while(nums[++counter] == 0 && counter < nums.size())
                    zeroes++;
                
                if(zeroes == ones)
                    res = zeroes > res ? zeroes : res;
            }
        }
        
        return res;
    }
};

// Time Complexity: O(n) 
// Space Complexity: O(n)
// Runtime: 456 ms, faster than 5.01%
// Memory Usage: 83.6 MB, less than 8.33%
class Solution {
public:
    
    int findMaxLength(vector<int>& nums) {
        
        map<int,int> temp;
        
        temp[0] = -1;
        int res = 0, count = 0;
        
        for(int i = 0; i < nums.size(); i++){
            count += nums[i] == 1 ? 1 : -1; 
            
            if(temp.count(count)){
                res = max(res, i - temp[count]);
            }else{
                temp[count] = i;
            }
        }
        
        return res;
    }
};