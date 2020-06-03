/**
 * @param {number[][]} costs
 * @return {number}
 * Runtime: 68 ms, faster than 39.39% of JavaScript online submissions for Two City Scheduling.
 * Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Two City Scheduling.
 * TC: O(NLogN), where N is the number of elements in costs
 * SC: O(N), where N is the number of elements in costs
 */
var twoCitySchedCost = function(costs) {
    const diff = costs.map(cost => cost[1] - cost[0]);

    diff.sort((cost0, cost1) => cost0 - cost1);

    let possibleSmallestDiff = 0;
    for (let index = 0; index < diff.length / 2; index++) {
        possibleSmallestDiff += diff[index];
    }


    return costs.reduce((acc, cur) => acc + cur[0], possibleSmallestDiff);
};