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

// Time Complexity: O(n)
// Space Complexity: O(n)
// Runtime: 36 ms, faster than 18.16%
// Memory Usage: 14.8 MB, less than 20.76%
class Solution {
public:
    bool isPalindrome(ListNode* head) {
        
        if(head == NULL || head->next == NULL)
            return true;
        
        vector<int> temp;
        
        while(head != NULL){
            temp.push_back(head->val);
            head = head->next;
        }
        
        for(int i = 0; i < temp.size()/2; i++){
            if(temp[i] != temp[temp.size()-1-i])
                return false;
        }
        
        return true;
    }
};