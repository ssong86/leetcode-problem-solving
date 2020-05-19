class Solution {
public:

    /* Time Complexity: O(n)
     * Space Complexity: O(n)
     * Run Time: 0 ms
     * Submit Time: 40 ms above 5.86%
     * Memory: 12.9 MB, above 7.14%
    */
    int singleNonDuplicate(vector<int>& nums) {
        
        map<int, int> a;
        int result;
        
        for(int i = 0; i < nums.size(); i++){
            a[nums[i]]++;
        }
        
        for(int j = 0; j < nums.size(); j++){
            if(a[nums[j]] == 1){
                return result = nums[j];
            }
        }
        return result;
    }
};