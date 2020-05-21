# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    # Sol 1. In-Order Tree Traversal
    def kthSmallest(self, root: TreeNode, k: int) -> int:
        return self.in_order(root)[k-1]
    
    def in_order(self, root: TreeNode):
        if root is None:
                return []
        in_left = self.in_order(root.left)
        root_val = [root.val]
        in_right = self.in_order(root.right) 
        return in_left+root_val+in_right
        # Time Complexity: O(n)
        # Space Complexity: O(1)
        # Run Code Runtime: 32 ms
        # Submit Runtime: 108 ms, 5.25% faster
        # Submit Memory: 17.7 mb, 5.45% less
    
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

    # Sol 2. Same without helper function
    def kthSmallest(self, root, k):
            cur = root
            while cur:
                if cur.left:
                    prev = cur.left
                    while prev.right and prev.right != cur:
                        prev = prev.right
                    if not prev.right:
                        prev.right = cur
                        cur = cur.left
                    else:
                        k -= 1
                        if not k:
                            return cur.val
                        cur = prev.right
                        prev.right = None
                        cur = cur.right
                else:
                    k -= 1
                    if not k:
                        return cur.val
                    cur = cur.right