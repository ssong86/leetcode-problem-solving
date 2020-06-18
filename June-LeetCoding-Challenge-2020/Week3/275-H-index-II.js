/**
 * @param {number[]} citations
 * @return {number}
 * Runtime: 72 ms, faster than 44.78% of JavaScript online submissions for H-Index II.
 * Memory Usage: 36.7 MB, less than 87.76% of JavaScript online submissions for H-Index II.
 * TC: O(logN), where N is length of citations
 * SC: O(1)
 */
var hIndex = function(citations) {
    if (!citations || citations.length === 0) {
        return 0;
    }

    const length = citations.length;
    let low = 0, high = length - 1;
    let ans = 0;

    while (low <= high) {
        const mid  = Math.floor((low + high) / 2);

        if (citations[mid] >= length - mid) {
            ans = length - mid;
            high = mid - 1;
        } else {
            low  = mid + 1;
        }
    }

    return ans;
};