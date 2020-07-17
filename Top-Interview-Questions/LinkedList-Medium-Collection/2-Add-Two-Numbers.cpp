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
// TC: O(bigger size of listnode)
// SC: O(number of digits of sum)
// Runtime: 32 ms, faster than 75.70%
// Memory Usage: 70.3 MB, less than 22.08%
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        
        int carry = 0;
        
        ListNode *head, *curr;
        head = curr = NULL;
        
        while(l1 || l2){
            int sum = 0;
            
            if(l1){
                sum += l1->val;
                l1 = l1->next;
            }
            if(l2){
                sum += l2->val;
                l2 = l2->next;
            }
            
            sum += carry;
            
            if(sum > 9){
                sum = sum%10;
                carry = 1;
            }else{
                carry = 0;
            }   
            
            ListNode *newNode = new ListNode(sum);
            
            if(curr != NULL){
                curr->next = newNode;
                curr = curr->next;
            }
            else
                curr = newNode;
                
            if(head == NULL)
                head = curr;
        }
        
        if(carry){
            curr->next = new ListNode(1);
        }
            
        return head; 
    }
};