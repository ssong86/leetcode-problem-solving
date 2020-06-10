# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    # Sol 1. Using stack
    def isValidBST(sel f, root: TreeNode) -> bool:
        stack, res = [], []
        while True:
            while root:
                stack.append(root)
                root = root.left
            # if root is None or all the nodes have 
            # been traversed and have no confliction 
            if not stack:
                return True
            node = stack.pop()
            # res stores the current values in in-order 
            # traversal order, node.val should larger than
            # the last element in res
            if res and node.val <= res[-1]:
                return False
            res.append(node.val)
            root = node.right
    # TC: O(n)
    # SC: O(n), worst, O(logn), best

    # Sol 2. Recursion