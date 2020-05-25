/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 * Runtime: 84 ms, faster than 25.00% of JavaScript online submissions for Uncrossed Lines.
 * Memory Usage: 41.5 MB, less than 66.67% of JavaScript online submissions for Uncrossed Lines.
 */
var maxUncrossedLines = function(A, B) {
    const aLength = A.length;
    const bLength = B.length;
    const dp = [...Array(aLength+1)].map(x => Array(bLength+1).fill(0));

    for(let aIndex = 1; aIndex <= aLength; aIndex++) {
        for(let bIndex = 1; bIndex <= bLength; bIndex++) {
            if (A[aIndex-1] === B[bIndex-1]) {
                dp[aIndex][bIndex] = dp[aIndex - 1][bIndex - 1] + 1;
            } else {
                dp[aIndex][bIndex] = Math.max(dp[aIndex][bIndex - 1], dp[aIndex - 1][bIndex]);
            }
        }
    }

    return dp[aLength][bLength];
};

console.log(maxUncrossedLines([1, 4, 2],[1, 2, 4]));
console.log(maxUncrossedLines([3, 3],[1, 3, 1, 2, 1]));
console.log(maxUncrossedLines([1,3,7,1,7,5],[1,9,2,5,1]));