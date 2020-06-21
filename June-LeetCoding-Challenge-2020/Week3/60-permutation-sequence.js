/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 * Runtime: 60 ms, faster than 81.82% of JavaScript online submissions for Permutation Sequence.
 * Memory Usage: 34.1 MB, less than 68.50% of JavaScript online submissions for Permutation Sequence.
 */
var getPermutation = function(n, k) {
    let factorial = [1];

    for (let currentNum = 1; currentNum <= n; currentNum++) {
        factorial[currentNum]= currentNum * factorial[currentNum - 1];
    }

    let nums = Array.from({ length: n }, (value, index) => index + 1);
    let result = "";

    for (let current = n; current > 0; current--) {
        const index = Math.ceil(k / factorial[current - 1]);

        result += nums[index - 1];
        nums.splice(index - 1, 1);
        k -= (factorial[current-1] * (index - 1));
    }

    return result;
};