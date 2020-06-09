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
// Solution #1: Using BFS
// Time Complexity: O(n) has to traverse all nodes
// Space Complexity: O(m) where m is max width of the tree
// Runtime: 12 ms, faster than 65.06% 
// Memory Usage: 19.6 MB, less than 5.16%
class Solution {
public:
    int maxDepth(TreeNode* root) {
            
        if(root == NULL)
            return 0;
        
        queue<TreeNode*> q;
        q.push(root);
        int nodeCount = q.size();
        int height = 0;
        
        while(1){
            
            nodeCount = q.size();
            
            if(nodeCount == 0)
                return height;
            
            height++;
            
            while(nodeCount > 0){
                TreeNode *node = new TreeNode();
                node = q.front();
                q.pop();
                
                if(node->left != NULL)
                    q.push(node->left);
                
                if(node->right != NULL)
                    q.push(node->right);
                
                nodeCount--;
            }
            
        }
        
    }
};

// Solution #1: Using DFS
// Time Complexity: O(n) has to traverse all nodes
// Space Complexity: O(h) where m is the max height of the tree
// Runtime: 12 ms, faster than 65.06%
// Memory Usage: 19.2 MB, less than 33.64%
class Solution {
public:
    int DFS(TreeNode *root){
        
        if(root == NULL)
            return 0;
            
        int leftHeight = DFS(root->left);
        int rightHeight = DFS(root->right);
        
        return max(leftHeight, rightHeight) + 1;
    }
    
    int maxDepth(TreeNode* root) {
        
        if(root == NULL)
            return 0;
        
        
        return DFS(root);  
    }
};