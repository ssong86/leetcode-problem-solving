// Solution #1 push and sort
// TC: O(nlogn)
// SC: O(1)
// Runtime: 4 ms, faster than 85.61% 
// Memory Usage: 9.2 MB, less than 37.52%
class Solution {
public: 
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int a = m;
        
        for(int i = 0; i < n; i++)
            nums1[a++] = nums2[i];
        
        sort(nums1.begin(), nums1.end(), [](int a, int b){
           return a < b; 
        });
    }
};

