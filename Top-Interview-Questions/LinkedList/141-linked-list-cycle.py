# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    # Sol 1. Two pointers
    def hasCycle(self, head: ListNode) -> bool:
        # print(head) # will give an error if there is a cycle
        
        if not head or not head.next:
            return False
        
        slow = head
        fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if fast is slow:
                return True

        return False
        # TC: O(N), where n is the length of linked list
        # SC: O(1)
        # Runtime: 52 ms, faster than 46.15%
        # Memory Usage: 16.9 MB, less than 61.27%