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

/* Time Complexity: O(n)
 * Space Complexity: O(n)
*/
class Solution {
public:
    bool isCousins(TreeNode* root, int x, int y) {

        TreeNode *temp = new TreeNode(-1);
        TreeNode *parX = NULL;
        TreeNode *parY = NULL;
        int level;
        
        pair<TreeNode*, TreeNode*> element;
        queue<pair<TreeNode*, TreeNode*>> q;
        
        q.push(make_pair(root, temp));
        
        while(!q.empty()){
            
            level = q.size();
            
            while(level){
                
                element = q.front();
                q.pop();
                
                if(element.first->val == x){
                    parX = element.second;
                }
                
                if(element.first->val == y){
                    parY = element.second;
                }
                
                if(element.first->left){
                    q.push(make_pair(element.first->left, element.first));
                }
                
                if(element.first->right){
                    q.push(make_pair(element.first->right, element.first));
                }
                
                level--;
                
                if(parX && parY)
                    break;
            }
            
            if(parX && parY)
                return parX != parY;
            
            if((parX && !parY) || (parY && !parX))
                return false;
            
        }
        
        return false;
    }
};