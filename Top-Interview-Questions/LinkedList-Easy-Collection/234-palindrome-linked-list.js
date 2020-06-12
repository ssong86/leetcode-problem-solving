/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 * Runtime: 80 ms, faster than 26.14% of JavaScript online submissions for Palindrome Linked List.
 * Memory Usage: 38.6 MB, less than 99.24% of JavaScript online submissions for Palindrome Linked List.
 * TC: O(N), where N is the number of elements in head
 * SC: O(1)
 */
var isPalindrome = function(head) {
    if(!head) {
        return true;
    }

    let length = countLength(head);
    let halfLength = Math.floor(length / 2);
    let firstHalfNode = head;
    while (halfLength > 0) {
        head = head.next;
        halfLength--;
    }

    let secondHalfNode = length % 2 === 1 ? reverseNode(head.next) : reverseNode(head);
    while (firstHalfNode && secondHalfNode) {
        if (firstHalfNode.val !== secondHalfNode.val) {
            return false;
        } else {
            firstHalfNode = firstHalfNode.next;
            secondHalfNode = secondHalfNode.next;
        }
    }

    return true;
};

function countLength (node) {
    let length = 0;
    while (node) {
        node = node.next;
        length++;
    }

    return length;
}

function reverseNode (node) {
    let prev = null;
    while (node) {
        const next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }

    return prev;
}