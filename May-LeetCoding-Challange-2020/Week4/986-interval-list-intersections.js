/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 * Runtime: 92 ms, faster than 40.48% of JavaScript online submissions for Interval List Intersections.
 * Memory Usage: 43.2 MB, less than 100.00% of JavaScript online submissions for Interval List Intersections.
 * TC: O(A.length + B.length) which is linear
 * SC: O(1) if we don't include result
 */
var intervalIntersection = function(A, B) {
    if (!A || !B) {
        return [];
    }

    let a = 0, b = 0;
    const result = [];
    while (a < A.length && b < B.length) {
        if (doesOverlap(A[a], B[b])) {
            result.push([Math.max(A[a][0], B[b][0]), Math.min(A[a][1], B[b][1])]);

            if(A[a][1] <= B[b][1]) {
                a++;
            } else {
                b++;
            }
        } else if(A[a][0] > B[b][1]) {
            b++;
        } else {
            a++;
        }
    }

    return result;
};

function doesOverlap (range1, range2) {
    const [start1, end1] = range1;
    const [start2, end2] = range2;

    return end2 >= start1 && end1 >= start2;
}