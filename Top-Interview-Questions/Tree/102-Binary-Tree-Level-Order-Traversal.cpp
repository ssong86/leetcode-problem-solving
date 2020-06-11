/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
// Breadth First Search
// Time Complexity: O(n) has to visit ALL tree nodes
// Space Complexity: O(w) max width of the tree n-1 in the worst case
// Runtime: 8 ms, faster than 49.16%
// Memory Usage: 12.5 MB, less than 62.15%
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
    
        vector<vector<int>> res;
        vector<int> level;
        
        if(!root)
            return res;
            
        queue<TreeNode*> q;
        int nodeCount = 0;
        
        q.push(root);
        
        while(!q.empty()){
            
            nodeCount = q.size();
            
            while(nodeCount > 0){
                TreeNode *node = q.front();
                q.pop();
                
                level.push_back(node->val);
                
                if(node->left)
                    q.push(node->left);
                if(node->right)
                    q.push(node->right);
                
                nodeCount--;
            }
            
            res.push_back(level);
            level.clear();
        }
        
        return res;
    }
};