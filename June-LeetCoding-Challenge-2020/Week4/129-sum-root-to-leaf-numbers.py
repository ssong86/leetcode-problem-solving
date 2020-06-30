# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    # Sol 1. DFS Pre-Order Traverse
    def sumNumbers(self, root: TreeNode) -> int:
        if not root:
            return 0
        
        each_path = []
        total_path_sum = 0
        
        def pre_order_traverse(node, so_far):
            if not node.left and not node.right: # means it reaches the end of each leaf
                each_path.append("".join(so_far+[str(node.val)]))
                
            if node.left: # means it goes to the left subtree
                pre_order_traverse(node.left, so_far+[str(node.val)])
                
            if node.right: # right subtree
                pre_order_traverse(node.right, so_far+[str(node.val)])
        
        pre_order_traverse(root,[])
        
        # print(each_path)
        
        for x in each_path:
            total_path_sum += int(x)
        
        return total_path_sum
    # TC: O(n), need to check all element
    # SC: O(g), where g is the number of leaf node. g = ceil(n/2)
    # Runtime: 28 ms, faster than 87.12%
    # Memory Usage: 14 MB, less than 38.06% 