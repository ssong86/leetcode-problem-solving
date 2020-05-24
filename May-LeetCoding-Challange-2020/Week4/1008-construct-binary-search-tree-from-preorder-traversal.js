/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * Runtime: 64 ms, faster than 20.20% of JavaScript online submissions for Construct Binary Search Tree from Preorder Traversal.
 * Memory Usage: 37.2 MB, less than 40.00% of JavaScript online submissions for Construct Binary Search Tree from Preorder Traversal.
 *
 * TC
 *    O(preorder.length)
 * SC
 *    O(N) for worst case where preorder is given as descending/ascending order
 *    O(logN) for best case where preorder is given to create a balanced tree
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

const MAX_VALUE = Math.pow(10, 8);
const MIN_VALUE = 1;

var bstFromPreorder = function(preorder) {
    if (!preorder || preorder.length < 1) {
        return preorder;
    }

    return constructBst(preorder, 0, MIN_VALUE, MAX_VALUE)[0];
};

function constructBst (array, current, min, max) {
    if (min > array[current] || array[current] > max) {
        return [null, current];
    }

    const data = array[current];
    const node = new TreeNode(data);

    current++;
    if (current < array.length) {
        const [left, newCurrent] = constructBst(array, current, min, Math.min(max, data));

        node.left = left;
        current = newCurrent;
    }

    if (current < array.length) {
        const [right, newCurrent] = constructBst(array, current, Math.max(min, data), max);

        node.right = right;
        current = newCurrent;
    }

    return [node, current];
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

TreeNode.prototype.toString = function () {
    const result = [];
    return traverseInorder(this, result).join(", ");
}

function traverseInorder (node, result) {
    const queue = [];

    queue.push(node);
    while (queue.length > 0) {
        const node = queue.shift();

        result.push(node.val);

        if (node.left || node.right) {
            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return result;
}