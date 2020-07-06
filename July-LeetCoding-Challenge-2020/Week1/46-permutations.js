/**
 * @param {number[]} nums
 * @return {number[][]}
 * Runtime: 92 ms, faster than 34.24% of JavaScript online submissions for Permutations.
 * Memory Usage: 39.9 MB, less than 13.94% of JavaScript online submissions for Permutations.
 */
var permute = function(nums) {
    if (nums.length === 1) {
        return [nums];
    }


    return nums.reduce((res, _, i, A, B = [...A]) => {
        B.splice(i, 1);

        const result = permute(B).map(array => [].concat(A[i], array));

        return res.concat(result);
    }, []);
}