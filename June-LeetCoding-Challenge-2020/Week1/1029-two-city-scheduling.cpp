/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
// Runtime: 8 ms, faster than 71.60%
// Memory Usage: 8 MB, less than 100.00%
class Solution {
public:
    int twoCitySchedCost(vector<vector<int>>& costs) {
        
        int res = 0;
                
        sort(costs.begin(), costs.end(), [](vector<int> &a, vector<int> &b) {
            return a[1] - a[0] > b[1] - b[0];   
        });
        
        for(int i = 0; i < costs.size(); i++){
            if(i < costs.size()/2){
                res+=costs[i][0];
            }else{
                res+=costs[i][1];
            }
        }
        
        return res;
    }
};