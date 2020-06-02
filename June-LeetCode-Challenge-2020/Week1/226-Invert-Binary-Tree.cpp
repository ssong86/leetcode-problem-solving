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
// Time Complexity: O(n) has to traverse all nodes 
// Space Complexity: O(1) not using any extra memory
// Runtime: 0 ms, faster than 100.00%
// Memory Usage: 8.5 MB, less than 100.00%
class Solution {
public:

    TreeNode* invertTree(TreeNode* root) {
        
        if(root == NULL)
            return root;
        
        TreeNode *temp;
        
        invertTree(root->left);
        invertTree(root->right);
        
        temp = root->left;
        root->left = root->right;
        root->right = temp;
        
        return root;
    }
};