/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * Runtime: 76 ms, faster than 35.29% of JavaScript online submissions for Merge Two Sorted Lists.
 * Memory Usage: 36.4 MB, less than 19.01% of JavaScript online submissions for Merge Two Sorted Lists.
 * TC: O(N + M), where N is the length of l1 and M is the length of l2
 * SC: O(1), just a single ListNode allocated for extra memory
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) {
        return l2;
    } else if (!l2) {
        return l1;
    }

    let head = new ListNode();
    let headCopy = head;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            head.next = l1;
            l1 = l1.next;
        } else {
            head.next = l2;
            l2 = l2.next;
        }

        head = head.next;
    }

    if (l1) {
        head.next = l1;
    } else {
        head.next = l2;
    }

    return headCopy.next;
};