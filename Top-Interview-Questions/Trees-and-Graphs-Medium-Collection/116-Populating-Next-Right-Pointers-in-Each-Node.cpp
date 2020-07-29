/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* left;
    Node* right;
    Node* next;

    Node() : val(0), left(NULL), right(NULL), next(NULL) {}

    Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {}

    Node(int _val, Node* _left, Node* _right, Node* _next)
        : val(_val), left(_left), right(_right), next(_next) {}
};
*/

// Solution #1 BFS
// TC: O(n)
// SC: O(2^(height-1))
// Runtime: 48 ms, faster than 15.44% 
// Memory Usage: 17.2 MB, less than 27.04%
class Solution {
public:
    Node* connect(Node* root) {
        
        if(!root)
            return root;
        
        queue<Node*> q;
        q.push(root);
        int length;
        
        while(!q.empty()){
            
            length = q.size();
            
            for(int i = 0; i < length; i++){
                Node *node = q.front();
                q.pop();
                
                if(i < length-1)
                    node->next = q.front();
                
                if(node->left){
                    q.push(node->left);
                    q.push(node->right);
                }
            }
        }
        
        return root;
    }
};