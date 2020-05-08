# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    # Sol 1. Depth first search tree
    def isCousins(self, root: TreeNode, x: int, y: int) -> bool:
        x_level, x_parent = self.dfs(root, None, 0, x)
        y_level, y_parent = self.dfs(root, None, 0, y)
        
        if x_parent and y_parent:
            if (x_parent != y_parent) and (x_level == y_level):
                return True
            else:
                return False
        else:
            return False
        
    def dfs(self, node, parent, current_level, c):
        if not node:
            return (0, None)
        if node.val == c:
            return (current_level, parent)
        
        left_level, left_parent = self.dfs(node.left, node, current_level+1, c)
        right_level, right_parent = self.dfs(node.right, node, current_level+1, c)
        
        if left_parent:
            return (left_level, left_parent)
        else:
            return (right_level, right_parent)
        
        # Time Complexity: O(n)
        # Space Complexity: O(n)