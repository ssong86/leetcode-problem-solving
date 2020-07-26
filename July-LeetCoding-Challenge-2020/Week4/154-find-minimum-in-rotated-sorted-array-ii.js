/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 72 ms, faster than 71.84% of JavaScript online submissions for Find Minimum in Rotated Sorted Array II.
 * Memory Usage: 36.9 MB, less than 14.29% of JavaScript online submissions for Find Minimum in Rotated Sorted Array II.
 */
var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        while (start < end && nums[start] === nums[end]) {
            start++;
        }

        const mid = Math.floor((start + end) / 2);

        if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    return nums[start];
};