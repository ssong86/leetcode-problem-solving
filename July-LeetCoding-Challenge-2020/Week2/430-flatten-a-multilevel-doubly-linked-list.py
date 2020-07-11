"""
# Definition for a Node.
class Node:
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child
"""

class Solution:
    def flatten(self, head: 'Node') -> 'Node':
        # DFS 
        # Stack
        if not head:
            return head
        trace=Node(0, None,None,None)
        curr = trace
        stack = [head]
        while stack:
            stack_pop = stack.pop()
            if stack_pop.next:
                stack.append(stack_pop.next)
            if stack_pop.child:
                stack.append(stack_pop.child)
            curr.next = stack_pop
            stack_pop.prev = curr
            stack_pop.child = None
            curr = stack_pop
        trace.next.prev = None # head pointing trace
        return trace.next
        # TC: O(n), need to check every element
        # SC: O(n), worst case = all child, if we exclude stack, O(1)
        