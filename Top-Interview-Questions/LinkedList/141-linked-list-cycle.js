/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * Runtime: 76 ms, faster than 35.92% of JavaScript online submissions for Linked List Cycle.
 * Memory Usage: 38.7 MB, less than 12.83% of JavaScript online submissions for Linked List Cycle.
 * TC: O(N), where N is the number of elements in head
 * SC: O(1), where N is the number of elements in head
 * Alternatvie Solution: Use map! TC: O(N), SC: O(N)
 */
var hasCycle = function(head) {
    if (!head) {
        return false;
    }

    let walker = head;
    let runner = head.next;
    while (runner && runner.next) {
        if (runner === walker) {
            return true;
        }

        walker = walker.next;
        runner = runner.next.next;
    }

    return false;
};