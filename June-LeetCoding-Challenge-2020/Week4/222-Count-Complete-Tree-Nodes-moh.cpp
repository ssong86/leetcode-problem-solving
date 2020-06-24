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
class Solution {
public:
    int countNodes(TreeNode* root) {
        if(root == NULL) return 0;
        
        int hLeft = 0;
        int hRight = 0;
        TreeNode *pLeft = root;
        TreeNode *pRight = root;
        
        while(pLeft != NULL){
            pLeft = pLeft->left;
            ++hLeft;
        }
        while(pRight != NULL){
            pRight = pRight->right;
            ++hRight;
        }
        
        //If the tree is Perfect
        if(hLeft == hRight) return pow(2, hLeft) - 1;
        
        return countNodes(root->left) + countNodes(root->right) + 1;
    }
};
//TC: O(n)
//SC: O(1)