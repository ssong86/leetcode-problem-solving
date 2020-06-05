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

// Time Complexty: O(2n) => O(n)
// Space Complexity: O(n)
// Runtime: 8 ms, faster than 67.76% 
// Memory Usage: 8.5 MB, less than 5.19%
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        
        //empty list
        if(head == NULL)
            return NULL;
        
        //only one node
        if(head->next == NULL)
            return head;
        
        stack<int> temp;
        
        while(head != NULL){
            temp.push(head->val);
            head = head->next;
        }
        
        ListNode *node = new ListNode(temp.top());
        temp.pop();
        
        ListNode *tail;
        head = node;
        tail = node;
        
        while(!temp.empty()){
            ListNode *node = new ListNode(temp.top());
            temp.pop();
            
            tail->next = node;
            tail = tail->next;
        }
        
        return head;
    }
};


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
// Space Complexiy: O(1)
// Runtime: 4 ms, faster than 96.70%
// Memory Usage: 7.8 MB, less than 53.80%
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        
        if(head == NULL || head->next == NULL){
            return head;
        }
        
        ListNode *prev, *current;
        prev = NULL;
        current = head;
        
        while(current != NULL){
            ListNode *next = current->next;
            current->next = prev;
            prev = current;
            current = next;
        }
        
        return prev;
    }
};


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
// Space Complexiy: O(n)
// Runtime: 8 ms, faster than 66.93%
// Memory Usage: 8.1 MB, less than 18.68% 
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        
        if(head == NULL || head->next == NULL){
            return head;
        }
        
        ListNode *ret = reverseList(head->next);
        
        head->next->next = head;
        head->next = NULL;
        
        return ret;
        
    }
};