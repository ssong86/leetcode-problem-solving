/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * Runtime: 68 ms, faster than 63.22% of JavaScript online submissions for Same Tree.
 * Memory Usage: 33.8 MB, less than 41.04% of JavaScript online submissions for Same Tree.
 * TC O(M + N), where M is number of elements in p and N is number of elements in q
 * SC O(min(X, Y)), where X is height of p and Y is height of q
 */
var isSameTree = function(p, q) {
    if ((!p && !q)) {
        return true;
    } else if (!p || !q) {
        return false;
    }

    if (p.val !== q.val) {
        return false;
    }

    const left = isSameTree(p.left, q.left);

    if (!left) {
        return left;
    }

    const right = isSameTree(p.right, q.right);

    return left && right;
};