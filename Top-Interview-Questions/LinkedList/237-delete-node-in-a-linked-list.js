/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * Runtime: 80 ms, faster than 19.42% of JavaScript online submissions for Delete Node in a Linked List.
 * Memory Usage: 37.4 MB, less than 8.33% of JavaScript online submissions for Delete Node in a Linked List.
 * TC: O(N) where N is number of element in a linked list
 * SC: O(1) since prev is just an address of existing node
 */
var deleteNode = function(node) {
    let prev = null

    while (node.next) {
        node.val = node.next.val;
        prev = node;
        node = node.next;
    }

    prev.next = null;
};
