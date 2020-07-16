# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    # Sol 1. Recursion
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        if not p and not q:
            return True
    
        if not p or not q:
            return False

        if p.val != q.val:
            return False
        
        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
    # TC: O(N), minimum number of nodes in p or q
    # SC: O(h), where h is the shorter depth in p or q, h represents the height of a tree
    # Runtime: 28 ms, faster than 81.78%
    # Memory Usage: 13.9 MB, less than 24.53%
