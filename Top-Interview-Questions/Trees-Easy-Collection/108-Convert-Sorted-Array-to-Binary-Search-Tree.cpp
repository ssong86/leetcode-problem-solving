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
// Time Complexity: O(n)
// Space Complexity: O(h)
// Runtime: 12 ms, faster than 97.65% 
// Memory Usage: 20.5 MB, less than 90.46%
class Solution {
public:
    
    TreeNode* DFS(vector<int> &nums, int left, int right){
        if(left > right)
            return NULL;
        int mid = (left+right)/2;
        TreeNode* node = new TreeNode();
        node->val = nums[mid];
        node->left = DFS(nums, left, mid-1);
        node->right = DFS(nums, mid+1, right);
        
        return node;
    }
    
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        int left = 0, right = nums.size()-1;
        
        return DFS(nums, left, right);
    }
};