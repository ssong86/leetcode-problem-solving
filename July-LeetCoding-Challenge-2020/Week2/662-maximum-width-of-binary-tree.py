# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def widthOfBinaryTree(self, root: TreeNode) -> int:
        if not root:
            return 0
        q = deque([(root,0)])
        width = 0
        while q:
            print("l", left)
            print("r",right)
            width = max(width,right-left+1)
            next_level = deque()
            while q:
                node, index = q.popleft() # popleft so it does traverse from left side (preorder - root, left, right)
                if node.left: 
                    next_level.append((node.left, index*2)) # left subtree root has always 2n index
                if node.right:
                    next_level.append((node.right, index*2+1)) # right subtree root has 2n+1 index number
                    
            q = next_level
        return width
        # TC: O(n + sigma(n-1)) -> O(n^2)
        # SC: O(n), if we exclude queue O(1)