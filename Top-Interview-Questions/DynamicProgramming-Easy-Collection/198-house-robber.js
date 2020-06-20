/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 64 ms, faster than 51.13% of JavaScript online submissions for House Robber.
 * Memory Usage: 33.4 MB, less than 74.59% of JavaScript online submissions for House Robber.
 *
 * 사실상, 짝수 번째 집들을 터느냐, 아니면 홀수 번째 집들을 터는 지의 차이!
 */
var rob = function(nums) {
    let prevMax = 0, curMax = 0;

    for (let n of nums) {
        let temp = curMax;
        curMax = Math.max(prevMax + n, curMax);
        prevMax = temp;
    }

    return Math.max(curMax, prevMax);
}