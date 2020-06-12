/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.map = new Map();
    this.array = new Array();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 * Runtime: 152 ms, faster than 51.57% of JavaScript online submissions for Insert Delete GetRandom O(1).
 * Memory Usage: 45.6 MB, less than 75.86% of JavaScript online submissions for Insert Delete GetRandom O(1).
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.map.has(val)) {
        this.array.push(val);
        this.map.set(val, this.array.length - 1);

        return true;
    }

    return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.map.has(val)) {
        const index = this.map.get(val);
        const lastIndex = this.array.length - 1;

        this.array[index] = this.array[lastIndex];
        this.map.set(this.array[lastIndex], index);

        this.array.pop();
        this.map.delete(val);

        return true;
    }

    return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const random = Math.floor(Math.random() * this.array.length);

    return this.array[random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

