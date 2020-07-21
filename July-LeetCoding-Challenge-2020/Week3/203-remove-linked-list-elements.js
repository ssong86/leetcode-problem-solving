/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * Runtime: 96 ms, faster than 36.21% of JavaScript online submissions for Remove Linked List Elements.
 * Memory Usage: 41.7 MB, less than 5.15% of JavaScript online submissions for Remove Linked List Elements.
 * TC: O(N), where N is length of head
 * SC: O(1)
 */
var removeElements = function(head, val) {
    let prev, headCopy = head;

    while (head) {
        if (head.val === val) {
            if (!prev) {
                headCopy = headCopy.next;
            } else {
                prev.next = head.next;
            }
        } else {
            prev = head;
        }

        head = head.next;
    }

    return headCopy;
};