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
 * Runtime: 112 ms, faster than 90.80% of JavaScript online submissions for Add Two Numbers.
 * Memory Usage: 41.9 MB, less than 52.16% of JavaScript online submissions for Add Two Numbers.
 * TC: O(max(M, N)) where M is length of l1 and N is length of l2
 * SC: O(max(M, N)) where M is length of l1 and N is length of l2
 */
var addTwoNumbers = function(l1, l2, carry = 0) {
    if (!l1 && !l2) {
        if (carry > 0) {
            return new ListNode(carry, null);
        } else {
            return null;
        }
    }

    const l1Val = l1 ? l1.val : 0;
    const l2Val = l2 ? l2.val : 0;

    const sum = l1Val + l2Val + carry;
    const newNode = new ListNode(sum % 10, null);

    newNode.next = addTwoNumbers(l1 ? l1.next : null, l2 ? l2.next : null, sum >= 10 ? 1 : 0);

    return newNode;
};