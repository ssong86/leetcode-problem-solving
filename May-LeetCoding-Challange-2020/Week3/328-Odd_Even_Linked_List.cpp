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
class Solution {
public:


    /* Time Complexity: O(n)
     * Space Complexity: O(1)
     * Runtime: 20ms 58.38%
     * Memory Usage: 9.8 MB 
    */
    ListNode* oddEvenList(ListNode* head) {
        
        if(head == NULL || head->next == NULL){
            return head;
        }
        
        ListNode *root = head;
        ListNode *last_node = NULL;
        ListNode *temp = NULL;
        int count = 1;
        
        while(head->next != NULL){
            count++;
            head = head->next;
        }
        
        last_node = head;
        head = root;
        temp = head->next;
        
        for(int i = 1; i < count; i+=2){

            if(temp == last_node)
                break;
            
            if(i % 2 == 1){
                head->next = temp->next;
                temp->next = NULL;
                last_node->next = temp;
                last_node = temp;
            }
            
            
            head = head->next;
            temp = head->next;
            
        }
        
        return root;
    }
};