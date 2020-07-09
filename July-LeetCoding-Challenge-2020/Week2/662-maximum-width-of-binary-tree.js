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
 * Runtime: 76 ms, faster than 76.96% of JavaScript online submissions for Maximum Width of Binary Tree.
 * Memory Usage: 39.2 MB, less than 6.12% of JavaScript online submissions for Maximum Width of Binary Tree.
 */
const mins = [0];
let max = 0;

var widthOfBinaryTree = function(root) {
    dfs(root, 0, 0);

    return max;
};

function dfs(v, lvl, pos) {
    if (!v) {
        return;
    }

    if (lvl === mins.length) {
        mins[lvl] = pos;
    }

    const delta = pos - mins[lvl];
    max = Math.max(max, delta + 1);

    dfs(v.left, lvl + 1, delta * 2);
    dfs(v.right, lvl + 1, delta * 2 + 1);
}

function widthOfBinaryTree(root) {
    const mins = [0];
    let max = 0;

    dfs(root, 0, 0);
    return max;

    function dfs(v, lvl, pos) {
        if (!v) return;
        if (lvl === mins.length) {
            mins[lvl] = pos;
        }

        const delta = pos-mins[lvl];
        max = Math.max(max, delta+1);
        dfs(v.left, lvl+1, delta*2);
        dfs(v.right, lvl+1, delta*2+1);
    }
}