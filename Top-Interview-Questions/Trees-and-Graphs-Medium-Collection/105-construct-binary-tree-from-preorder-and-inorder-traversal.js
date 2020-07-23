/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * Runtime: 88 ms, faster than 82.58% of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.
 * Memory Usage: 39.9 MB, less than 46.47% of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.
 * TC: O(N), SC: O(logN) - O(N)
 */
var buildTree = function(preorder, inorder) {
    return helper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};

function helper (preorder, p1, p2, inorder, i1, i2) {
    if (p1 > p2 || i1 > i2) {
        return null;
    }

    const value = preorder[p1];
    const index = inorder.indexOf(value);
    const nLeft = index - i1;
    const root = new TreeNode(value);

    root.left  = helper(preorder, p1 + 1, p1 + nLeft, inorder, i1, index - 1);
    root.right = helper(preorder, p1 + nLeft + 1, p2, inorder, index + 1, i2);

    return root;
}