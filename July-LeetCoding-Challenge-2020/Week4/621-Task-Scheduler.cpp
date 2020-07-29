// TC: O(number of tasks)
// SC: O(1) 26 chars storage
// Runtime: 188 ms, faster than 51.95%
// Memory Usage: 34.3 MB, less than 96.44%
class Solution {
public:
    int leastInterval(vector<char>& tasks, int n) {
        
        vector<int> list;
        
        for(int i = 0; i < 26; i++)
            list.push_back(0);
        
        for(char c : tasks)
            list[c - 'A']++;
        
        sort(list.begin(), list.end(), [](int a, int b){
            return a > b;
        });
        
        int max_count = list[0];
        int min_idle = (max_count - 1) * n;
        
        for(int i = 1; i < list.size(); i++){
            if(min_idle <= 0)
                break;
            min_idle -= min(max_count - 1, list[i]);
        }
        
        min_idle = max(0, min_idle);
        
        return min_idle + tasks.size();
    }
};