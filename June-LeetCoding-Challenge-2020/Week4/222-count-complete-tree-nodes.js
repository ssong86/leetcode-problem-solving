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
 * @return {number}
 * Runtime: 96 ms, faster than 59.74% of JavaScript online submissions for Count Complete Tree Nodes.
 * Memory Usage: 53.7 MB, less than 5.40% of JavaScript online submissions for Count Complete Tree Nodes.
 * TC: O(logN * logN), where N is the number of elements in tree
 * SC: O(logN), where N is the number of elements in tree
 */
var countNodes = function(root) {
    const height = getHeight(root);

    if (height < 0) {
        return 0;
    }

    const rightHeight = getHeight(root.right);

    if (rightHeight === height - 1) {
        return Math.pow(2, height) + countNodes(root.right);
    } else {
        return Math.pow(2, height - 1) + countNodes(root.left);
    }
};

function getHeight (node) {
    if (!node) {
        return -1;
    }

    return getHeight(node.left) + 1;
}