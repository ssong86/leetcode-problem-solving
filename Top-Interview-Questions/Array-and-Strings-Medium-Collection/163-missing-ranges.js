/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 * Runtime: 64 ms, faster than 67.02% of JavaScript online submissions for Missing Ranges.
 * Memory Usage: 33.3 MB, less than 65.62% of JavaScript online submissions for Missing Ranges.
 * TC: O(N) where N is number of element in nums
 * SC: O(1)
 */
function findMissingRanges(nums, lower, upper) {
    const res = [];
    nums = [lower - 1, ...nums, upper + 1];

    for (let i = 1; i < nums.length; i++) {
        const diff = nums[i] - nums[i - 1];

        if (diff === 2) {
            res.push(`${nums[i - 1] + 1}`);
        } else if (diff > 2) {
            res.push(`${nums[i - 1] + 1}->${nums[i] - 1}`);
        }
    }

    return res;
}