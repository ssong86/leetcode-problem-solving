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
// Solution 1 Recursive
// Time Complexity: O(n) has to visit ALL tree nodes
// Space Complexity: O(n) similar in DFS, height of the tree is space complexity.
// In this case, tree can be linear.
// Runtime: 8 ms, faster than 51.26%
// Memory Usage: 16.4 MB, less than 44.38%
class Solution {
public:
    bool isMirror(TreeNode *t1, TreeNode *t2){
        if(!t1 && !t2) 
            return true;
        if(!t1 || !t2)
            return false;
        return t1->val == t2->val && isMirror(t1->left, t2->right)  && isMirror(t1->right, t2->left);
    }
    bool isSymmetric(TreeNode* root) {
        if(!root) 
            return true;
        return isMirror(root, root);
    }
};

// Solution 2 Iterative
// Time Complexity: O(n) has to visit ALL tree nodes
// Space Complexity: O(n) similar in BFS, width of the tree is space complexity.
// In this case, queue can be loaded n nodes.
// Runtime: 12 ms, faster than 17.69%
// Memory Usage: 16.7 MB, less than 13.04%
class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        if(!root)
            return true;
        
        queue<TreeNode*> q;
        q.push(root);
        q.push(root);
        TreeNode *t1, *t2; 
        
        while(!q.empty()){
            t1 = q.front();
            q.pop();
            t2 = q.front();
            q.pop();
            
            if(!t1 && !t2)
                continue;
            if(!t1 || !t2)
                return false;
            if(t1->val != t2->val)
                return false;
            q.push(t1->left);
            q.push(t2->right);
            q.push(t1->right);
            q.push(t2->left);
        }
        
        return true;
    }
};