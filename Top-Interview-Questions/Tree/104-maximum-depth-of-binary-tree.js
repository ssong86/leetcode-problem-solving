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
 * Runtime: 124 ms, faster than 5.14% of JavaScript online submissions for Maximum Depth of Binary Tree.
 * Memory Usage: 38.4 MB, less than 13.60% of JavaScript online submissions for Maximum Depth of Binary Tree.
 * TC: O(N) where N is the number of elements in root
 * SC: O(logN) for balanced and O(N) for extreme unbalanced where N is the number of elements in root
 *
 * If we solve this problem with BFS, then would the space complexity would be different?
 * Actually, the change in complexity is quite interesting! 
 * SC: O(1) for extreme unbalanced tree, O(N) for balanced tree
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }

    const leftDepth = maxDepth(root.left) + 1;
    const rightDepth = maxDepth(root.right) + 1;

    return Math.max(leftDepth, rightDepth);
};

/**
 * @param {TreeNode} root
 * @return {number}
 * Runtime: 100 ms, faster than 10.58% of JavaScript online submissions for Maximum Depth of Binary Tree.
 * Memory Usage: 41 MB, less than 5.10% of JavaScript online submissions for Maximum Depth of Binary Tree.
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    const queue = [];
    queue.unshift([root, 1]); // queue.add()
    
    let maxDepth = 0;
    while (queue.length !== 0) {
        const [node, depth] = queue.pop(); // queue.poll()
        maxDepth = Math.max(maxDepth, depth);
        
        if (node.left) {
            queue.unshift([node.left, depth + 1]);
        }
        
        if (node.right) {
            queue.unshift([node.right, depth + 1]);
        }
    }
    
    return maxDepth;
};