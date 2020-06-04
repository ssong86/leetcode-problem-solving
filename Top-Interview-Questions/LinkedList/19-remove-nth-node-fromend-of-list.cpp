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

// Time Complexity: O(head-n)
// Space Complexity: O(1)
// Runtime: 0 ms, faster than 100.00%
// Memory Usage: 10.5 MB, less than 5.26%
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        
        if(head->next == NULL)
            return NULL;
        
        ListNode* tail = head;
        
        //remove tail
        if(n == 1){
            while(tail->next->next != NULL){
                tail = tail->next;
            }
            tail->next = NULL;
            return head;
        }
        
        int count = 0;
        
        //count distance to tail from head
        while(tail->next != NULL){
            count++;
            tail = tail->next;
        }
        
        //if head, return head->next pointer
        if(count == n-1){
            head = head->next;
            return head;
        }
        
        tail = head;
        
        //go to right before to the node that you wish to delete
        for(int i = 0; i < count-n; i++){
            tail = tail->next;
        }        
        
        tail->next = tail->next->next;
        
        return head;
    }
};