/**
 * @param {number[]} nums
 * @return {number}
 * interesting fact: a problem solved by a computer professor in 1984, now become an easy level problem in Leetcode in 2016/2017
 * TC: O(N)
 */
function maxSubArray(nums) {
    let prev = 0;
    let max = Number.MIN_VALUE;

    for (let i = 0; i < nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i]);
        max = Math.max(max, prev);
    }
    return max;
}