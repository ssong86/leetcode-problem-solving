# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    # Sol 1. Recursion
    def isSymmetric(self, root: TreeNode) -> bool:
        if root is None:
            return True
        return self.symmetric_helper(root.left, root.right)
    
    def symmetric_helper(self, left, right):
        if left and right:
            return left.val == right.val and self.symmetric_helper(left.left, right.right) and \
        self.symmetric_helper(left.right, right.left)
        return left == right
    # TC: O(N), where n is the # of nodes
    # SC: O(N), recursive function stacks