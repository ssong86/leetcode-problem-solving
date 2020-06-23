// Solution #1 Depth First Search 
// TC: O(n) traverse all nodes in the tree
// SC: O(h) the number of DFS calls is the number of height of the tree
// Runtime: 36 ms, faster than 93.11%
// Memory Usage: 30.9 MB, less than 59.24%
class Solution {
public:
    int res;
    
    void DFS(TreeNode *root){
        
        if(!root)
            return;
        
        //preorder traversal
        res++;
        
        DFS(root->left);
        DFS(root->right);
    }
    
    int countNodes(TreeNode* root) {
        res = 0;
        
        DFS(root);
        
        return res;
    }
};

// Solution #2 Breadth First Search 
// TC: O(n) traverse all nodes in the tree
// SC: O(w) the widest level in the tree will be the max length of queue during runtime
// Runtime: 48 ms, faster than 41.85%
// Memory Usage: 31.9 MB, less than 5.01%
class Solution {
public:
    int res;
    int queue_size;
    
    int countNodes(TreeNode *root) {
        
        res = 0;
        queue<TreeNode*> q;
        q.push(root);
        
        while(!q.empty()){
            
            queue_size = q.size();

            for(int i = 0; i < queue_size; i++){
                
                TreeNode *node = q.front();
                q.pop();
                
                if(!node)
                    break;
                
                res++;
                
                if(node->left)
                    q.push(node->left);
                if(node->right)
                    q.push(node->right);
            }
            
        }
        
        return res;
    }
};