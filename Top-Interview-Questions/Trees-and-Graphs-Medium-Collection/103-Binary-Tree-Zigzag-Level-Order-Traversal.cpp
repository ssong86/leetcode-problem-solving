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
 // Solution #1 Breadth First Search
 // TC: O(number of nodes in the tree)
 // SC: O(max width of the tree)
 // Runtime: 0 ms, faster than 100.00%
 // Memory Usage: 12.2 MB, less than 75.89%
class Solution {
public:
    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
        
        if(!root)
            return {};
        
        vector<vector<int>> res;
        
        queue<TreeNode*> q;
        q.push(root);
        
        int length;
        int zigzag = 0;
        
        while(!q.empty()){
            
            length = q.size();
            vector<int> level;
            
            for(int i = 0; i < length; i++){
                TreeNode *node = q.front();
                q.pop();
                level.push_back(node->val);
                
                if(node->left)
                    q.push(node->left);
                if(node->right)
                    q.push(node->right);
            }
            
            if(zigzag++%2){
                reverse(level.begin(), level.end());
                res.push_back(level);
            }else{
                res.push_back(level);
            }
        }
        
        
        return res;
    }
};