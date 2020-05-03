class Solution {
public:
    int singleNumber(vector<int>& nums) {
        /*
         * Time Complexity: O(n)
         * Space Complexity: O(n)
         * 
         */
        int n = nums.size();
        
        if(n == 1){
            return nums[0];
        }
        
        map<int, bool> a;
        int sum = 0;
        
        for(int i = 0; i < n; i++){
            if(a[nums[i]] == false){
                sum += nums[i];
                a[nums[i]] = true;
            }else{
                sum -= nums[i];
            }
        }
        
        return sum;
        
    }
};

class Solution {
public:
    int singleNumber(vector<int>& nums) {
        
        /*
         * Time Complexity: O(n^2)
         * Space Complexity: O(1)
         * Time Limit Exceeded
         * Reason: Uses no memory but time complexity is too high
         * 
         */
        
        int n = nums.size();
        int result;
        
        bool check = false;
        if(n == 1){
            return nums[0];
        }
                
        for(int i = 0; i < n; i++){
            check = false;
            
            for(int j = 0; j < n; j++){
                if(j != i){
                    if(nums[i] == nums[j]){
                        check = true;
                    }
                }
                
                if(j == n-1){
                    if(check == false){
                        result = nums[i];
                        return result;
                    }
                }
            }
        }
        
        return result;
    }
};