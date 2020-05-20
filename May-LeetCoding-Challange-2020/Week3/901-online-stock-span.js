
var StockSpanner = function() {
    this.stack = [];
};

/**
 * @param {number} price
 * @return {number}
 * Runtime: 368 ms, faster than 47.46% of JavaScript online submissions for Online Stock Span.
 * Memory Usage: 70.9 MB, less than 100.00% of JavaScript online submissions for Online Stock Span.
 *
 * Time Complexity
 * Best case scenario: O(1) when prices come in ascending order
 * Worst case scenario: O(N) when every prices came in descending order and the last price is the biggest where N is the
 * number of "next" invocation
 *
 * Space Complexity
 * Best case scenario: O(1) when prices come in ascending order
 * Worst case scenario: O(N) when every prices came in descending order where N is the number of "next" invocation
 */
StockSpanner.prototype.next = function(price) {
    let count = 1;

    while (!isEmpty(this.stack) && peek(this.stack).price <= price) {
        const prevCount = pop(this.stack).count;
        count += prevCount;
    }

    push(this.stack, { price, count });

    return count;
};

function isEmpty(stack) { return stack.length === 0; }
function peek(stack) { return stack[stack.length - 1]; }
function pop(stack) { if (!isEmpty(stack)) return stack.pop(); }
function push(stack, value) { stack.push(value); }

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */