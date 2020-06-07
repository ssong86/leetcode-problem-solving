# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        if not head or not head.next:
            return True
        ret = []
        while head:
            ret.append(head.val)
            head=head.next
            
        return ret == ret[::-1]
    # TC: O(n)
    # SC: O(n)
    # Runtime: 124 ms, faster than 5.86%
    # Memory Usage: 24.2 MB, less than 21.00%