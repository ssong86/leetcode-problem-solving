# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    # Sol 1. Linked List
    def oddEvenList(self, head: ListNode) -> ListNode:
        # Check if the current node is valid or not
        # Base case
        if(not head):
            return head
        
        odd = head
        even = odd.next
        evenList = even
        
        while(even and even.next):
            odd.next = even.next
            odd = odd.next
            
            even.next = odd.next
            even = even.next
            
        odd.next = evenList
        return head
    # Time Complexity: O(n)
    # Space Complexity: O(1)
    # Run Code Runtime: 48 ms
    # Submit Runtime: 68 ms
    # Submit Memory: 15.7 MB
    # Submit Runtime Distribution: 7.57% faster, fuck this 

    # Sol 2. 
    class Solution:
    def oddEvenList(self, head: ListNode) -> ListNode:
        even=ListNode(0)
        et=even
        odd=ListNode(0)
        ot=odd
        count=1
        
        while head!=None:
            if count%2==1:
                ot.next=head
                ot=ot.next
                
            else:
                et.next=head
                et=et.next
                
            head=head.next
            count+=1
            
        et.next=None
        ot.next=even.next
        
        return odd.next

    # Sol 3. Most optimized
    class Solution:
    def oddEvenList(self, head: ListNode) -> ListNode:
        cur = head
        values = []
        while cur:
            values.append(cur.val)
            cur = cur.next
            
        i = 0
        cur = head
        while i < len(values):
            cur.val = values[i]
            cur = cur.next
            i+=2
        i = 1
        while i < len(values):
            cur.val = values[i]
            cur = cur.next
            i+=2
        return head