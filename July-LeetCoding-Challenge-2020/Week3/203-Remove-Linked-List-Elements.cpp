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
 // Solution #1 Two Pointers
 // TC: O(length of nodes)
 // SC: O(1)
 // Runtime: 28 ms, faster than 60.73%
 // Memory Usage: 13.5 MB, less than 61.47%
class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        
        if(!head)
            return head;
        
        while(head){
            if(head->val != val)
                break;
            head = head->next;
        }
        
        if(!head || !head->next)
            return head;
        
        ListNode *slow, *fast;
        slow = head;
        fast = head->next;
        
        while(fast){
            if(fast->val == val){
                fast = fast->next;
                slow->next = fast;
            }else{
                slow = slow->next;
                fast = fast->next;
            }
            
        }
        
        return head;
    }
};