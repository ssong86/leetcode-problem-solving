/**
 * @param {number} n
 * @return {number}
 * FAILED SOLUTION :[
 */
var numTrees = function(n) {
    if (n <= 1) {
        return n;
    }

    return countBST(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, n);
};

function countBST (min, max, used, size) {
    if (used.size === size) {
        return 1;
    }

    let count = 0;

    for (let num = 1; num <= size; num++) {

        if (!used.has(num) && num > min && num < max) {

            used.add(num);
            const left = countBST(min, num, used, size);
            const right = countBST(num, max, used, size);
            used.delete(num);

            if (left !== 0 && right !== 0) {

                count += (left * right);
            } else if (left === 0) {

                count += right;
            } else if (right === 0) {

                count += left;
            }
        }
    }

    return count;
}

/**
 * @param {number} n
 * @return {number}
 * Runtime: 3312 ms, faster than 6.50% of JavaScript online submissions for Unique Binary Search Trees.
 * Memory Usage: 34.4 MB, less than 8.38% of JavaScript online submissions for Unique Binary Search Trees.
 * TC: O(2^n)
 * SC: O(n)
 */
var numTrees = function(n) {
    if (n <= 1) {
        return 1;
    }

    let count = 0;
    for (let num = 1; num <= n; num++) {
        count += numTrees(num - 1) * numTrees(n - num);
    }

    return count;
};

/**
 * @param {number} n
 * @return {number}
 * Runtime: 68 ms, faster than 44.51% of JavaScript online submissions for Unique Binary Search Trees.
 * Memory Usage: 32.7 MB, less than 96.89% of JavaScript online submissions for Unique Binary Search Trees.
 * TC: O(n * k), where k is depth of BST which veries from logn to n -> O(n^2)
 * SC: O(n)
 */
var numTrees = function(n, memo = new Map()) {
    if (n <= 1) {
        return 1;
    } else if (memo.has(n)) {
        return memo.get(n);
    }

    let count = 0;
    for (let num = 1; num <= n; num++) {
        count += numTrees(num - 1, memo) * numTrees(n - num, memo);
    }

    memo.set(n, count);

    return count;
};