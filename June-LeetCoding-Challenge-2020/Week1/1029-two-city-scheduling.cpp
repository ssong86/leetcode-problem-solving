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
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        
        if(head->next == NULL)
            return NULL;
        
        ListNode* tail = head;
        
        if(n == 1){
            while(tail->next->next != NULL){
                tail = tail->next;
            }
            tail->next = NULL;
            return head;
        }
        
        int count = 0;
        
        while(tail->next != NULL){
            count++;
            tail = tail->next;
        }
        
        if(count == n-1){
            head = head->next;
            return head;
        }
        
        tail = head;
        
        for(int i = 0; i < count-n; i++){
            tail = tail->next;
        }        
        
        if(head == tail){
            head->next = head->next->next;
        }else {
            tail->next = tail->next->next;
        }
        
        return head;
    }
};