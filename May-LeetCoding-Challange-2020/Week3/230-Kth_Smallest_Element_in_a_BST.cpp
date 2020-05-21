
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

// Time Complexity: O(logn) X O(k) O
// Space Complexity: O(1)
// Runtime: 24 ms, faster than 66.61%
// Memory Usage: 24 MB, less than 6.67%

// Best case: kth on the left most tree O(height of tree)
// Worst case: kth on the right most tree O(k) in which n is size of the tree

class Solution {
public:
    
    int result, counter;
    
    void getValue(TreeNode *root){
        
        if(root == NULL)
            return;
        
        getValue(root->left);
        
        counter--;
        if(counter == 0){
            result = root->val;
            return;
        }
        
        getValue(root->right);
        
    }
    
    int kthSmallest(TreeNode* root, int k) {
        
        counter = k;
        getValue(root);
        
        return result;
    }
};