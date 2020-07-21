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
 * Runtime: 76 ms, faster than 41.47% of JavaScript online submissions for Binary Tree Zigzag Level Order Traversal.
 * Memory Usage: 37.3 MB, less than 6.82% of JavaScript online submissions for Binary Tree Zigzag Level Order Traversal.
 * TC: O(N), where N is number of elements in root
 * SC: O(logN) ~ O(N), where N is number of elements in root
 */
var zigzagLevelOrder = function(root) {
    const height = getHeight(root);
    const result = new Array(height).fill().map(() => []);

    traverse(root, result, 0);

    return result;
};

function traverse (node, result, depth) {
    if (!node) {
        return;
    }

    if (depth % 2 === 0) {
        result[depth].push(node.val);
    } else {
        result[depth].unshift(node.val);
    }

    traverse(node.left, result, depth + 1);
    traverse(node.right, result, depth + 1);
}

function getHeight (node) {
    if (!node) {
        return 0;
    }

    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}