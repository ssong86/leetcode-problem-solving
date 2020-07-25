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
 * @param {number} k
 * @return {number}
 * Runtime: 80 ms, faster than 88.72% of JavaScript online submissions for Kth Smallest Element in a BST.
 * Memory Usage: 42.7 MB, less than 6.39% of JavaScript online submissions for Kth Smallest Element in a BST.
 */
var kthSmallest = function(root, k) {
    const array = [];

    traverse(root, array);

    return array[k - 1];
};

function traverse (root, array) {
    if (!root) {
        return;
    }

    traverse(root.left, array);
    array.push(root.val);
    traverse(root.right, array);
}