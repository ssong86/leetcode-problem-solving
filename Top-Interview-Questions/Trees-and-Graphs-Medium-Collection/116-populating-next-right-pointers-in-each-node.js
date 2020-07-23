/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 * Runtime: 92 ms, faster than 76.89% of JavaScript online submissions for Populating Next Right Pointers in Each Node.
 * Memory Usage: 43.4 MB, less than 16.90% of JavaScript online submissions for Populating Next Right Pointers in Each Node.
 * TC:O(N), SC:O(logN)
 */
var connect = function(root) {
    if (!root || !root.left) {
        return root;
    }

    root.left.next = root.right;
    root.right.next = root.next ? root.next.left : null;

    connect(root.left);
    connect(root.right);

    return root;
};