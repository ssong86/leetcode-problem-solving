# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        def dfs(left, right):
            if left > right:
                return None

            # mid-point is root
            p = (left + right) // 2

            # inorder traversal: left -> node -> right
            root = TreeNode(nums[p])
            root.left = dfs(left, p - 1)
            root.right = dfs(p + 1, right)
            return root
        
        return dfs(0, len(nums) - 1)
    # TC: O(n)
    # SC: O(n)