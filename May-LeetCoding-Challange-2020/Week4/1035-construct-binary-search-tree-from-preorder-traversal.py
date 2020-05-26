# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def bstFromPreorder(self, preorder: List[int]) -> TreeNode:
        if len(preorder) <= 1:
            return preorder
        
        stack = []
        N = len(preorder)
        root = TreeNode(preorder[0])
        
        stack.append(root)
        
        for i in range(1,N):
            # if new value < current root, add to the left
            if preorder[i] < stack[-1].val:
                stack[-1].left = TreeNode(preorder[i])
                stack.append(stack[-1].left)
            # add right if new value > current root
            # pop off stack to know which one
            else:
                while stack and preorder[i] > stack[-1].val:
                    last = stack.pop()
                last.right = TreeNode(preorder[i])
                stack.append(last.right)
                
        return root
        # Time Complexity: O(n)
        # Space Complexity: O(n)
        # Submit Runtime: 36 ms, faster than 64.66%
        # Submit Memory: 13.6 MB, less than 6.67%