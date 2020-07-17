/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * Runtime: 100 ms, faster than 38.83% of JavaScript online submissions for Top K Frequent Elements.
 * Memory Usage: 44.1 MB, less than 6.40% of JavaScript online submissions for Top K Frequent Elements.
 * TC: O(N), where N is length of nums
 * SC: O(N), where N is length of nums
 */
var topKFrequent = function(nums, k) {
    const map = {};
    const bucket = Array(nums.length + 1).fill().map(() => []);
    const result = [];

    for (const num of nums) {
        map[num] = map[num] ? ++map[num] : 1;
    }

    for (const num in map) {
        bucket[map[num]].push(num);
    }

    for (let i = bucket.length - 1; i >= 0, k > 0; i--) {
        if (bucket[i].length === 0) {
            continue;
        } else {
            result.push(...bucket[i]);
            k -= bucket[i].length;
        }
    }

    return result;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * Runtime: 84 ms, faster than 73.71% of JavaScript online submissions for Top K Frequent Elements.
 * Memory Usage: 40 MB, less than 30.15% of JavaScript online submissions for Top K Frequent Elements.
 * TC: O(NlogN), where N is length of nums
 * SC: O(NlogN), where N is length of nums
 */
var topKFrequent = function(nums, k) {
    const map = {};

    for (const num of nums) {
        map[num] = map[num] ? ++map[num] : 1;
    }

    const entries = Object.entries(map);

    entries.sort((a, b) => a[1] - b[1]);

    const result = [];

    while (k > 0) {
        result.push(entries.pop()[0])

        k--;
    }

    return result;
};