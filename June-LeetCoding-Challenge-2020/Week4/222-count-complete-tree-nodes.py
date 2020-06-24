# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    # Sol 1. Binary Tree in Binary Tree Search
    def countNodes(self, root: TreeNode) -> int:
        if not root: # edge case
            return 0
        if not root.left and not root.right:
            return 1 # only root exists
        
        l_depth = self.get_level_left(root.left)
        r_depth = self.get_level_right(root.right)
        
        if l_depth == r_depth: # balanced on both right and left
            return pow(2,l_depth)-1
        elif l_depth > r_depth:
            return 1+self.countNodes(root.left)+self.countNodes(root.right)
    
    def get_level_left(self, node:TreeNode) -> int:
        ll = 1 # return level or height var
        while node:
            ll += 1
            node=node.left
        # print("ll", ll)
        return ll
    
    def get_level_right(self, node:TreeNode) -> int:
        lr = 1
        while node:
            lr += 1
            node=node.right            
        # print("lr",lr)
        return lr

    # TC: O(logN * logN), where N is number of nodes
    # SC: O(logN)
    # Runtime: 76 ms, faster than 90.18%
    # Memory Usage: 21.2 MB, less than 64.80%

    # Sol 2. DFS
    def countNodes(self, root: TreeNode) -> int:
        if not root: # edge case
            return 0
        if not root.left and not root.right:
            return 1 # only root exists
        ans = 0
        ret_ = self.dfs(root, ans)
        return ret_
        
    def dfs(self, node:TreeNode, ret: int) -> int:
        if not node:
            return 0
        ret = 1 + self.dfs(node.left, ret) + self.dfs(node.right, ret)
        return ret
    # TC: O(N), where N is the number of elemnt in the tree
    # SC: O(h), where h is the level of the tree, worst: n, only left-weighted tree
    #           generally logN
    # Runtime: 80 ms, faster than 79.96%
    # Memory Usage: 21.3 MB, less than 23.40%
