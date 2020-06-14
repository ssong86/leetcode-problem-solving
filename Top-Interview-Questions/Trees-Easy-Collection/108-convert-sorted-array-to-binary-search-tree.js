/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * Runtime: 80 ms, faster than 34.63% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
 * Memory Usage: 39.1 MB, less than 15.68% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
 */
var sortedArrayToBST = function(nums) {
    if (!nums || nums.length === 0) {
        return null;
    }

    return buildTree(0, nums.length - 1, nums);
};

function buildTree (first, last, array) {
    if (first === last) {
        return new TreeNode(array[first]);
    } else if (first > last) {
        return null;
    }

    const mid = Math.floor((first + last) / 2);
    const node = new TreeNode(array[mid]);
    node.left = buildTree(first, mid - 1, array);
    node.right = buildTree(mid + 1, last, array);

    return node;
}