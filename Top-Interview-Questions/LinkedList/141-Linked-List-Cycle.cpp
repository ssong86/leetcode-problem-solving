/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
// SOLUTION #1: USING HASH MAP
// Time Complexity: 
// If list is cyclic, O(n) If not, O(n) same
// Space Complexity: O(n)
// Runtime: 36 ms, faster than 5.82%
// Memory Usage: 9.8 MB, less than 11.42%
class Solution {
public:
    bool hasCycle(ListNode *head) {
        
        map<ListNode*, int> list;
        
        while(head != NULL){
            if(list[head] > 0)
                return true;
            
            list[head]++;
            head = head->next;
        }
        
        return false;
    }
};

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
// Time Complexity: O(n)
// Space Complexity: O(1)
// Runtime: 12 ms, faster than 52.77%
// Memory Usage: 7.7 MB, less than 82.61%
class Solution {
public:
    bool hasCycle(ListNode *head) {
        
        if(head == NULL || head->next == NULL)
            return false;
        
        ListNode *slow_runner, *fast_runner;
        slow_runner = head;
        fast_runner = head->next;
        
        while(slow_runner != fast_runner){
            
            if(fast_runner == NULL || fast_runner->next == NULL)
                return false;
            
            slow_runner = slow_runner->next;
            fast_runner = fast_runner->next->next;
            
        }
        
        return true;
    }
};