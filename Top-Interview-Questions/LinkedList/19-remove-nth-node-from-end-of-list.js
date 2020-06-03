/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * Runtime: 68 ms, faster than 33.73% of JavaScript online submissions for Remove Nth Node From End of List.
 * Memory Usage: 34.3 MB, less than 13.64% of JavaScript online submissions for Remove Nth Node From End of List.
 * TC: O(N) where N is the number of elements in head
 * SC: O(1)
 */
var removeNthFromEnd = function(head, n) {
    if (!head) {
        return head;
    }

    let walker = head;
    let runner = head;
    let prev;

    while (n > 1) {
        runner = runner.next;
        n--;
    }

    while (runner.next) {
        prev = walker;
        walker = walker.next;
        runner = runner.next;
    }

    if (!prev) {
        head = head.next;
    } else {
        prev.next = walker.next;
    }

    return head;
};