# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    # Sol 1. DFS    
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
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
    # TC: O(N)
    # SC: O(N)

    # Sol 2. BFS
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        levels = []
        next_level = deque([root])
        
        while root and next_level:
            curr_level = next_level
            next_level = deque()
            levels.append([])
            
            for node in curr_level:
                # append the current node value
                levels[-1].append(node.val)
                # process child nodes for the next level
                if node.left:
                    next_level.append(node.left)
                if node.right:
                    next_level.append(node.right)
                    
        return levels[::-1]
        # TC: O(N)
        # SC: O(N)