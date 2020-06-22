/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 76 ms, faster than 41.20% of JavaScript online submissions for Single Number II.
 * Memory Usage: 37.1 MB, less than 34.13% of JavaScript online submissions for Single Number II.
 * TC: O(NLogN), where N is the number of elements in nums
 * SC: O(LogN), where N is the number of elements in nums
 */
var singleNumber = function(nums) {
    nums.sort();

    let count = 0;
    for (let index = 1; index < nums.length; index++) {
        if (nums[index - 1] === nums[index]) {
            count++;
        } else {
            if (count === 2) {
                count = 0;
            } else {
                return count === 0 ? nums[index - 1] : nums[index];
            }
        }
    }

    return nums[nums.length - 1];
};

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

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 68 ms, faster than 64.79% of JavaScript online submissions for Single Number II.
 * Memory Usage: 36.1 MB, less than 72.99% of JavaScript online submissions for Single Number II.
 * TC: O(32N) -> O(N), where N is the number of elements in nums
 * SC: O(1)
 */
var singleNumber = function(nums) {
    let result = 0;
    let mask, sum;

    for (let i = 0; i < 32; i++) {
        sum = 0;
        mask = (1 << i);

        for (let j = 0; j < nums.length; j++) {
            if ((nums[j] & mask) != 0) {
                sum++;
            }
        }

        if ((sum % 3) != 0) {
            result |= mask;
        }
    }

    return result;
};