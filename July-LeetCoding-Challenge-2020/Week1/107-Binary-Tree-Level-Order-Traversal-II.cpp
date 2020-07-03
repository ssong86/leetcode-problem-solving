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
// TC: O(n) number of nodes
// SC: O(w) max size of width of tree
// Runtime: 4 ms, faster than 92.73%
// Memory Usage: 12.8 MB, less than 59.32%
class Solution {
    
    vector<vector<int>> res;
    stack<vector<int>> s;
    
public:
    
    vector<vector<int>> levelOrderBottom(TreeNode* root) {
    
        if(!root)
            return res;
        
        BFS(root);
        
        return getResult();
    }
    
    void BFS(TreeNode *root){
        
        int qSize;
        queue<TreeNode*> q;
        vector<int> valueByLevel;

        q.push(root);
        
        while(!q.empty()){
            
            qSize = q.size();
            
            for(int i = 0; i < qSize; i++){
                TreeNode *node = q.front();
                q.pop();
                
                valueByLevel.push_back(node->val);
                
                if(node->left)
                    q.push(node->left);
                
                if(node->right)
                    q.push(node->right);
            }
            
            s.push(valueByLevel);
            valueByLevel.clear();
        }
    }
    
    vector<vector<int>> getResult(){
        
        while(!s.empty()){
            
            res.push_back(s.top());
            s.pop();
        }
        
        return res;
    }
};