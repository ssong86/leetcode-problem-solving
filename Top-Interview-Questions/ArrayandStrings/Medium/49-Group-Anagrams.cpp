// Time Complexity: O(size of strs * length of each string)
// Space Complexity: O(number of different anagrams * number of same anagrams)
// Runtime: 88 ms, faster than 58.16%
// Memory Usage: 22.4 MB, less than 10.55%
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
    
        vector<vector<string>> res;
        vector<int> temp1(26,0); // O(1)
        map<vector<int>, vector<int>> temp; // 
        
        for(int i = 0; i < strs.size(); i++){
            
            for(char a : strs[i]){
                temp1[a-'a']++;
            }
            temp[temp1].push_back(i);
            
            for(int j = 0; j < temp1.size(); j++){
                temp1[j] = 0;
            }
        }
        
        vector<string> t;
        
        for(auto const &it : temp){
            
            for(int i = 0; i < it.second.size(); i++){
                t.push_back(strs[it.second[i]]);
            }
            res.push_back(t);
            t.clear();
        }
        
        
        return res;
    }
};