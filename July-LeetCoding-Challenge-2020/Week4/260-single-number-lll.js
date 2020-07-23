/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 76 ms, faster than 41.20% of JavaScript online submissions for Single Number II.
 * Memory Usage: 39.7 MB, less than 5.22% of JavaScript online submissions for Single Number II.
 * TC: O(N), where N is the number of elements in nums
 * SC: O(N), where N is the number of elements in nums
 */
var singleNumber = function(nums) {
    if (!nums) {
        return [];
    }

    const map = new Map();
    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, 2);
        } else {
            map.set(num, 1);
        }
    }

    const result = [];
    for (const [num, count] of map.entries()) {
        if (count === 1) {
            result.push(num);
        }
    }

    return result;
};