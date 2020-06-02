# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    # Sol 1. Using Stack
    def invertTree(self, root: TreeNode) -> TreeNode:
        if not root:
            return None
            
        stack=[root]
        while stack:
            node = stack.pop()
            if node:
                node.left, node.right = node.right, node.left
                stack =stack+[node.left, node.right]
                
        return root
    # TC: O(N)
    # SC: O(N)
    # Runtime: 28 ms, faster than 75.77%
    # Memory: 14.1 MB, less than 5.41% 

class Solution:
    # Sol 2. Recursive Function
    def invertTree(self, root):
        if root is None:
            return None
        root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
        return root

    # TC: O(N)
    # SC: O(N)