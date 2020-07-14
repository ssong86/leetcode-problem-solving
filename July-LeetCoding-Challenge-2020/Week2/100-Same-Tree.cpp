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
// Solution #1 DFS
// TC: O(n) number of nodes
// SC: O(h) number of times DFS called which is equal to the height of the tree 
// Runtime: 0 ms, faster than 100.00%
// Memory Usage: 10.1 MB, less than 15.43%
class Solution {
    bool same = true;
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        
        DFS(p,q);
        
        return same;
    }
    
    void DFS(TreeNode *p, TreeNode *q){
        if(!p || !q){
            if(!(!p && !q))
                same = false;
            return;
        }
        else if(p->val != q->val)
            same = false;
        
        isSameTree(p->left, q->left);
        isSameTree(p->right, q->right);
    }
};