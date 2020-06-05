/* Solution #1 Failed with memory limitation */
/* TC: pickIndex: O(1), preprocessing: O(KN), where K is average value in w, and N is the number of elements in w
 * SC: O(KN), where K is average value in w, and N is the number of elements in w
 */
/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.array = [];

    for (let [idx, num] of Object.entries(w)) {
        while (num > 0) {
            this.array.push(parseInt(idx));
            num--;
        }
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const random = Math.random();

    return this.array[Math.floor(random * this.array.length)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

/**
 * @param {number[]} w
 * Runtime: 304 ms, faster than 39.92% of JavaScript online submissions for Random Pick with Weight.
 * Memory Usage: 46.5 MB, less than 79.44% of JavaScript online submissions for Random Pick with Weight.
 * TC: pickIndex: O(N) preprocessing: O(N), where N is the number of elements in w
 * SC: O(N), where N is the number of elements in w
 */
var Solution = function(w) {
    this.array = w;

    for (let index = 1; index < this.array.length; index++) {
        this.array[index] += this.array[index - 1];
    }

    this.max = this.array[this.array.length - 1];
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const random = Math.random();
    const target = Math.floor(random * this.max) + 1;

    for (let index = 0; index < this.array.length; index++) {
        if (isWithinRange(index - 1, index, this.array, target)) {
            return index;
        }
    }
};

function isWithinRange(start, end, array, target) {
    const startValue = start < 0 ? 0 : array[start];

    return target > startValue && target <= array[end];
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.array = w;

    for (let index = 1; index < this.array.length; index++) {
        this.array[index] += this.array[index - 1];
    }

    this.max = this.array[this.array.length - 1];
};

/**
 * @return {number}
 * Runtime: 196 ms, faster than 70.75% of JavaScript online submissions for Random Pick with Weight.
 * Memory Usage: 46.4 MB, less than 80.24% of JavaScript online submissions for Random Pick with Weight.
 * TC: pickIndex: O(logN) preprocessing: O(N), where N is the number of elements in w
 * SC: O(N), where N is the number of elements in w
 */
Solution.prototype.pickIndex = function() {
    const random = Math.random();
    const target = Math.floor(random * this.max) + 1;

    return binarySearch(0, this.array.length - 1, target, this.array);
};

function binarySearch (start, end, target, array) {
    if (start > end) {
        return -1;
    }

    const middle = Math.floor((start + end) / 2);

    if (array[middle] === target) {
        return middle;
    } else if (array[middle] > target) {
        if (middle === 0 || (middle > 0 && array[middle - 1] < target)) {
            return middle;
        } else {
            return binarySearch(start, middle - 1, target, array);
        }
    } else {
        return binarySearch(middle + 1, end, target, array);
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */