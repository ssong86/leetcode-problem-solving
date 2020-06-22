/**
 * initialize your data structure here.
 * Runtime: 100 ms, faster than 91.97% of JavaScript online submissions for Min Stack.
 * Memory Usage: 42.7 MB, less than 90.11% of JavaScript online submissions for Min Stack.
 *
 * Runtime: 112 ms, faster than 65.08% of JavaScript online submissions for Min Stack.
 * Memory Usage: 42.2 MB, less than 99.65% of JavaScript online submissions for Min Stack.
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

function peek (stack) {
    return stack.length > 0 ? stack[stack.length - 1] : null;
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);

    const currentMin = peek(this.minStack);
    if (currentMin === null || x <= currentMin) {
        this.minStack.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const x = this.stack.pop();

    const currentMin = peek(this.minStack);
    if (x === currentMin) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return peek(this.stack);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return peek(this.minStack);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */