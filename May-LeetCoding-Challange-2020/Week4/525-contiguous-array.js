/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 100 ms, faster than 99.03% of JavaScript online submissions for Contiguous Array.
 * Memory Usage: 44.2 MB, less than 100.00% of JavaScript online submissions for Contiguous Array.
 * TC: O(N) where N is the length of nums
 * SC: O(N) where N is the length of nums
 */
var findMaxLength = function(nums) {
    if (!nums || nums.length <= 1) {
        return 0;
    }
    
    const countMap = new Map();
    let max = 0, count = 0;
    
    countMap.set(0, -1);
    for (let index = 0; index < nums.length; index++) {
        count += nums[index] === 0 ? -1 : 1;
        
        if (countMap.has(count)) {
            max = Math.max(max, index - countMap.get(count));
        } else {
            countMap.set(count, index);
        }
    }
    
    return max;
};