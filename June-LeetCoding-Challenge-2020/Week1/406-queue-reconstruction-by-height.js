/**
 * @param {number[][]} people
 * @return {number[][]}
 * Runtime: 92 ms, faster than 66.55% of JavaScript online submissions for Queue Reconstruction by Height.
 * Memory Usage: 41.5 MB, less than 23.33% of JavaScript online submissions for Queue Reconstruction by Height.
 * TC: O(N^2), where N is the length of people
 * SC: O(logN), where N is the length of people assuming we don't count return memory
 */
var reconstructQueue = function(people) {
    if (!people) {
        return people;
    }

    people.sort((a, b) => {
        if (a[0] !== b[0]) {
            return b[0] - a[0];
        } else {
            return a[1] - b[1];
        }
    });

    return people.reduce((acc, cur) => {
        acc.splice(cur[1], 0, cur);

        return acc;
    }, []);
};