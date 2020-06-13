# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    # Sol 1. DFS, Stack
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        result=[]
        if not root:
            return result
        self.dfs(root,0,result)
        
        return result
    
    def dfs(self,root,level,res):
        if not root:
            return 
        if len(res) < level+1: # current level
            res.append([])
        res[level].append(root.val)
        self.dfs(root.left, level+1, res)
        self.dfs(root.right, level+1, res)
    # TC: O(N), n is the number of nodes in the tree
    # SC: O(N), same
    # Runtime: 36 ms, faster than 58.05%
    # Memory Usage: 14.4 MB, less than 16.06%


    # Definition for a binary tree node.
    # class TreeNode:
    #     def __init__(self, val=0, left=None, right=None):
    #         self.val = val
    #         self.left = left
    #         self.right = right
    class Solution:
        def levelOrder(self, root: TreeNode) -> List[List[int]]:
            result=[]
            if not root:
                return result
            self.dfs(root,0,result)
            
            return result
        
        def dfs(self,root,level,res):
            if not root:
                return 
            if len(res) < level+1: # current level
                res.append([])
            self.dfs(root.left, level+1, res)
            self.dfs(root.right, level+1, res)
            res[level].append(root.val)


    # Sol 2. BFS, Queue
