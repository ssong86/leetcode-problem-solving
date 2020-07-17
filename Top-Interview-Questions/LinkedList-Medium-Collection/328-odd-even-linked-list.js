/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * Runtime: 92 ms, faster than 30.50% of JavaScript online submissions for Odd Even Linked List.
 * Memory Usage: 39.5 MB, less than 5.79% of JavaScript online submissions for Odd Even Linked List.
 */
function oddEvenList(head) {
    if (!head) {
        return head;
    }

    let odd = head;
    const even = head.next;

    while (odd.next && odd.next.next) {
        const evenCopy = odd.next;

        odd.next = odd.next.next;
        odd = odd.next;
        evenCopy.next = odd.next;
    }

    odd.next = even;

    return head;
}