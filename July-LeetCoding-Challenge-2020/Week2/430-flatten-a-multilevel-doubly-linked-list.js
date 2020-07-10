/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 * Runtime: 64 ms, faster than 82.79% of JavaScript online submissions for Flatten a Multilevel Doubly Linked List.
 * Memory Usage: 37.5 MB, less than 5.33% of JavaScript online submissions for Flatten a Multilevel Doubly Linked List.
 */
var flatten = function(head) {
    if (!head) {
        return head;
    }

    let result = flattenHelper(head);

    result.prev = null;

    return result;
};

function flattenHelper (node) {
    if (!node) {
        return node;
    }

    const nodeCopy = node;
    while (node.next && !node.child) {
        node = node.next;
    }

    const child = flattenHelper(node.child);

    if (child) {
        child.prev.next = node.next;

        if (node.next) {
            node.next.prev = child.prev;
        }

        child.prev = node;
        node.next = child;
    }

    node.child = null;

    while (node.next) {
        node = node.next;
    }

    nodeCopy.prev = node;

    return nodeCopy;
}