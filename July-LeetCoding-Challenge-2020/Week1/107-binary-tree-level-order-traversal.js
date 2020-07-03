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
 * @return {number[][]}
 * Runtime: 72 ms, faster than 58.87% of JavaScript online submissions for Binary Tree Level Order Traversal II.
 * Memory Usage: 37.3 MB, less than 7.04% of JavaScript online submissions for Binary Tree Level Order Traversal II.
 * TC: O(N)
 * SC: O(N)
 */
var levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }

    const height = getHeight(root);
    const result = new Array(height);

    traverse(root, height - 1, result);

    return result;
};

function traverse (node, index, result) {
    if (!node) {
        return;
    }

    if (result[index]) {
        result[index].push(node.val);
    } else {
        result[index] = [node.val];
    }

    traverse(node.left, index - 1, result);
    traverse(node.right, index - 1, result);
}

function getHeight (node) {
    if (!node) {
        return 0;
    }

    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}