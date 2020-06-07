// Time Complexity: O(n)
// Space Complexiy: O(n)
// Runtime: 796 ms, faster than 5.26%
// Memory Usage: 40.6 MB, less than 32.99% 
class Solution {
public:
    vector<int> temp;
    int total = 0;
    
    Solution(vector<int>& w) {
        
        temp = w;
        for(int i = 0; i < temp.size(); i++){
            total+=temp[i];
        }
    }
    
    int pickIndex() {
        
        int num = rand()%total + 1;
        int res;
        
        for(int i = 0; i < temp.size(); i++){
            num -= temp[i];
            if(num <= 0)
                return i;
        }
        
        return temp.size()-1;
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * Solution* obj = new Solution(w);
 * int param_1 = obj->pickIndex();
 */