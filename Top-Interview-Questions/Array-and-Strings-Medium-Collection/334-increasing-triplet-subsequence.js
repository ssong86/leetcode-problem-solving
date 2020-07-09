/**
 * @param {number[]} nums
 * @return {boolean}
 * Runtime: 96 ms, faster than 22.32% of JavaScript online submissions for Increasing Triplet Subsequence.
 * Memory Usage: 36 MB, less than 35.97% of JavaScript online submissions for Increasing Triplet Subsequence.
 */
var increasingTriplet = function(nums) {
    if (nums === null || nums.length<3 ) {
        return false;
    }

    let small = nums[0], mid = Infinity;

    for (let i=1; i<nums.length; i++) {
        if (nums[i] > small && nums[i] < mid) {
            mid=nums[i];
        }

        if (nums[i] < small) {
            small=nums[i];
        }

        if (nums[i] > mid) {
            return true;
        }
    }

    return false;
};