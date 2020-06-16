# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    # Sol 1. Recursion
    def searchBST(self, root: TreeNode, val: int) -> TreeNode:
        def dfs_helper(node):
            if not node:
                return
            if node.val == val:
                return node
            elif node.val > val: # means return node is in left subtree 
                return dfs_helper(node.left)
            else:
                return dfs_helper(node.right)        
        return dfs_helper(root)
    # TC: O(n)
    # SC: O(n)

    # Sol 2. Iteration
    def searchBST(self, root: TreeNode, val: int) -> TreeNode:
        while root:
            if root.val == val:
                return root
            elif root.val > val:
                root = root.left
            else:
                root = root.right
        return None
    # TC: O(N)
    # SC: O(1)
    # Runtime: 80 ms, faster than 58.56%
    # Memory Usage: 15.7 MB, less than 65.42%