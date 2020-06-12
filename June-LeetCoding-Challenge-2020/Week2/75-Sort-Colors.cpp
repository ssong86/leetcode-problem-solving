// Time Complexity: O(n)
// Space Complexity: O(1)
// Runtime: 4 ms, faster than 49.05%
// Memory Usage: 8.4 MB, less than 41.64%
class Solution {
public:
    void swap(int &a, int &b){
        int temp = a;
        a = b;
        b = temp;
    }
    
    void sortColors(vector<int>& nums) {
        
        int left = curr = 0, right = nums.size() -1;
        
        while(curr <= right){
            switch(nums[curr]){
                case 0: swap(nums[curr], nums[left++]); curr++; break;
                case 2: swap(nums[curr], nums[right--]); break;
                default: curr++;
            }
        }

    }
};

// Time Complexity: O(n)
// Space Complexity: O(n)
// Runtime: 4 ms, faster than 49.05%
// Memory Usage: 8.4 MB, less than 41.62%
class Solution {
public:

    void sortColors(vector<int>& nums) {
        
        map<int, int> m;
        
        for(int i = 0; i < nums.size(); i++)
            m[nums[i]]++;
        
        int index = 0;
        
        for(int i = 0; i < m[0]; i++)
            nums[index++] = 0;
        
        for(int i = 0; i < m[1]; i++)
            nums[index++] = 1;
        
        for(int i = 0; i < m[2]; i++)
            nums[index++] = 2;
    }
};