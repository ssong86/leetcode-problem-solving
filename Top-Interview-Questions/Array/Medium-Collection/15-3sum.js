/*
    Optimal Solution
    Runtime: 160 ms, faster than 70.62% of JavaScript online submissions for 3Sum.
    Memory Usage: 46.9 MB, less than 62.00% of JavaScript online submissions for 3Sum.
 */
var threeSum = function(nums) {
    if(!nums) {
        return null;
    } else if(nums.length <= 2) {
        return [];
    }

    nums.sort((a, b) => a - b);

    const result = [];

    for (let index = 0; index < nums.length; index++) {
        threeSumHelper(index + 1, nums.length - 1, nums, -nums[index], result);

        while (index < nums.length - 1 && nums[index] === nums[index + 1]) {
            index++;
        }
    }

    return result;
};

function threeSumHelper (start, end, array, pivot, result) {
    while (start < end) {
        const sumSoFar = array[start] + array[end];

        if (sumSoFar === pivot) {
            result.push([-pivot, array[start], array[end]]);

            start++;
            end--;

            while (start < end && array[start] === array[start - 1]) {
                start++;
            }

            while (start < end && array[end] === array[end + 1]) {
                end--;
            }
        } else if (sumSoFar < pivot) {
            start++;
        } else {
            end--;
        }
    }
}