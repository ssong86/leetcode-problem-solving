/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * Runtime: 68 ms, faster than 24.58% of JavaScript online submissions for Invert Binary Tree.
 * Memory Usage: 33.9 MB, less than 20.00% of JavaScript online submissions for Invert Binary Tree.
 * TC: O(N), where N is the number of elements in a tree
 * SC: O(logN), where N is the number of elements in a tree
 */
var invertTree = function(root) {
    if (!root) {
        return null;
    }
    
    swapLeftRight(root);
    
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};

function swapLeftRight (node) {
    const tmp = node.left;
    node.left = node.right;
    node.right = tmp;
}