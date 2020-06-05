# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    # Sol 1. Using Stack
    def reverseList(self, head: ListNode) -> ListNode:
        if head is None or head.next is None:
            return head
        stack = [] # SC: O(N)
        while head:
            stack.append(head.val)
            head=head.next
            
        #print(stack)
        ret_ll = rev_ll = ListNode()
        #print(ret_ll)
        #print(rev_ll)
        while stack:
        #    print(rev_ll)
            rev_ll.next = ListNode(stack.pop())
            rev_ll = rev_ll.next
        #print(rev_ll)
        #print(ret_ll)
        return ret_ll.next
    # TC: O(n) + O(n) -> O(n), where n is the number of nodes
    # SC: O(n), stack
    # Runtime: 40 ms, faster than 37.80%
    # Memory Usage: 16.1 MB, less than 28.19%

    # Sol 2. Iteration
    def reverseList(self, head: ListNode) -> ListNode:
        if head is None or head.next is None:
            return head
        # Change the current node's next pointer to its previous element
        # Singly linked list, we need to store previous value beforehand(prev)
        # Need another pointer(temp) to store the next value
        prev = None
        curr = head
        while curr:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
            
        return prev
    # TC: O(n)
    # SC: O(1)

    # Sol 3. Recursion
    def reverseList(self, head: ListNode) -> ListNode:
        if head is None or head.next is None:
            return head
        rev = self.reverseList(head.next)
        head.next.next = head # place next next node to current node to avoid null
        head.next = None # by doing this the null element will stay at the end of the linked list
        return rev
    # TC: O(n)
    # SC: O(n), recursive function stacks as the amount of elements in the linked list
    
