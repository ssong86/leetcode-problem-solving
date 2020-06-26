
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
 * Runtime: 72 ms, faster than 47.98% of JavaScript online submissions for Sum Root to Leaf Numbers.
 * Memory Usage: 36 MB, less than 16.66% of JavaScript online submissions for Sum Root to Leaf Numbers.
 * TC: O(n), where n is the number of elements in root
 * SC: O(logn) - O(n), where n is the number of elements in root
 */
var sumNumbers = function(root, path = []) {
    if (!root) {
        return 0;
    }

    path.push(root.val);

    if (isLeafNode(root)) {
        const result = calculateSumFromStack(path);

        path.pop();

        return result;
    }

    const leftSum = sumNumbers(root.left, path);
    const rightSum = sumNumbers(root.right, path);

    path.pop();

    return leftSum + rightSum;
};

function calculateSumFromStack (stack) {
    let sum = 0;
    for (let i = stack.length - 1, exp = 1; i >= 0; i--, exp *= 10) {
        sum += stack[i] * exp;
    }

    return sum;
}

function isLeafNode (node) {
    return !node.left && !node.right;
}