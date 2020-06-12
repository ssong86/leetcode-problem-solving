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
 * Runtime: 68 ms, faster than 33.79% of JavaScript online submissions for Reverse Linked List.
 * Memory Usage: 36.8 MB, less than 17.56% of JavaScript online submissions for Reverse Linked List.
 * TC: O(N + N)
 * SC: O(N)
 */
var reverseList = function(head) {
    if (!head) {
        return head;
    }

    const stack = [];
    while (head) {
        stack.push(head);
        head = head.next;
    }

    let reversedHead = stack.pop();
    const reversedHeadCopy = reversedHead;
    while (stack.length !== 0) {
        const current = stack.pop();
        reversedHead.next = current;
        reversedHead = reversedHead.next;
    }

    reversedHead.next = null;

    return reversedHeadCopy;
};

/*
    TC: O(N)
    SC: O(1)
 */
var reverseList = function(head) {
    if (!head) {
        return head;
    }

    let prev = null;
    while (head) {
        const next = head.next;
        
        head.next = prev;
        prev = head;
        head = next;
    }
    
    return prev;
};

/*
    TC: O(N)
    SC: O(N)
 */
var reverseList = function(head) {
    if (!head) {
        return head;
    }
    
    return reverseListHelper(head);
};

function reverseListHelper (node) {
    if (!node.next) {
        return node;
    }
    
    const head = reverseListHelper(node.next);
    node.next.next = node;
    node.next = null;
    
    return head;
}