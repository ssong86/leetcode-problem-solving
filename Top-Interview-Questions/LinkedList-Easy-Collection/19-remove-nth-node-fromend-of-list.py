# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        first = second = head
        
        for f in range(n):
            first=first.next
           # print("firstval", first.val)
        if first is None:
            return head.next
        while first.next:
            first=first.next
           # print("firstval2", first)
            second=second.next
           # print("secondval", second.val)
           # print("secondval2", second.next.val)
           # print("secondval3", second.next.next)
       # print("final first val", first)
       # print("final second val", second)
        second.next = second.next.next
        return head
    # TC: O(n), where n is the length of the linked list
    # SC: O(1), no additional space
    # Runtime: 32 ms, faster than 68.75%
    # Memory: 13.7 MB, less than 6.06%