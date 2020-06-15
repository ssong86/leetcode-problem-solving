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
// Solution #1 Depth First Search
// Time Complexity: O(n) At most, has to go through all nodes which consists calling DFS() n times
// Best Case: O(1)
// 1. root-val == 1
// 2. root is empty
// 3. root is the only node (X) because root->left root->right DFS will be called

// Worst Case: O(n)
// 1. No node has matching value => has to go through all nodes
// 2. Last node has matching value depending on preorder inorder postorder

// Space Complexity: O(h) number of recursions will be the height of tree 
// Best Case and Worst Case are the same as above

// Runtime: 60 ms, faster than 76.35%
// Memory Usage: 34.8 MB, less than 30.60%
class Solution {
public:
    
    TreeNode *res = NULL;
    int val;
    
    void DFS(TreeNode *root){
        if(!root)
            return;
        
        if(root->val == val){
            res = root;
            return;
        }
        
        DFS(root->left);
        DFS(root->right);
            
        return;
    }
    
    TreeNode* searchBST(TreeNode* root, int val) {
        
        this->val = val;
        
        DFS(root);
        return res;
    }

    
};



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
// Solution #2 Breadth First Search
// Time Complexity: O(n) 
// Best Case O(1): 
// 1. root node value == val
// 2. root node is empty
// 3. root is the only node (O) 

// Worst Case O(n) last node is the value or no matching node
// 1. No node has matching value => has to go through all nodes
// 2. Last node has matching value (lowest and right most node)

// Space Complexity: O(w) where max width of level which will be the max size of queue during runtime.
// Best Case and Worst Case are same  above
//
// Runtime: 60 ms, faster than 76.35%
// Memory Usage: 34.8 MB, less than 30.60%
class Solution {
public:

    TreeNode* searchBST(TreeNode* root, int val) {
        
        if(!root)
            return NULL;
        
        queue<TreeNode*> q;
        int node_count = 0;
        
        q.push(root);
        
        while(!q.empty()){
            
            node_count = q.size();
            
            while(node_count){
                
                TreeNode *top = q.front();
                q.pop();
                
                if(top->val == val)
                    return top;
                
                if(top->left)
                    q.push(top->left);
                if(top->right)
                    q.push(top->right);
                
                node_count--;
            }
        }
        
        return NULL;
    }
};