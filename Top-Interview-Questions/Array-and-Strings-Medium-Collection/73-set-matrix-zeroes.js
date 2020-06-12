/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * Runtime: 84 ms, faster than 63.98% of JavaScript online submissions for Set Matrix Zeroes.
 * Memory Usage: 37.6 MB, less than 10.00% of JavaScript online submissions for Set Matrix Zeroes.
 *
 * (with matrix.keys())
 * Runtime: 148 ms, faster than 8.06% of JavaScript online submissions for Set Matrix Zeroes.
 * Memory Usage: 37.6 MB, less than 10.00% of JavaScript online submissions for Set Matrix Zeroes.
 *
 * Time Complexity
 *  O(N) where N is the total number of elements in a matrix, OR
 *  O(XY) where X and Y are the width and the length of a matrix
 *
 * Space Complexity
 *  O(1) since it only leverages two variables for storing flags
 *
 * Example 1
 * [ 1, 2, 3 ]      [1, 0, 3]       | isFirstRowZero = false        [1, 0, 3]       [1, 0, 3]
 * [ 4, 0, 6 ]  ->  [0, 0, 6] ->    |                           ->  [0, 0, 0]  ->   [0, 0, 0]
 * [ 7, 8, 9 ]      [7, 8, 9]       | isFirstColZero = false        [7, 8, 9]       [7, 0, 9]
 *
 * Example 2
 * [ 1, 0, 3 ]      [1, 0, 3]       | isFirstRowZero = *true*       [1, 0, 3]       [1, 0, 3]       [0, 0, 0]
 * [ 4, 0, 6 ]  ->  [0, 0, 6] ->    |                           ->  [0, 0, 0]  ->   [0, 0, 0]  ->   [0, 0, 0]
 * [ 7, 8, 9 ]      [7, 8, 9]       | isFirstColZero = false        [7, 8, 9]       [7, 0, 9]       [7, 0, 9]
 */
var setZeroes = function(matrix) {
    if (!matrix) {
        return;
    }

    let isFirstRowZero = false, isFirstColumnZero = false;

    // Store flags in 0 indices of column and row
    for (const rowIndex of matrix.keys()) {
        for (const colIndex of matrix[0].keys()) {
            const element = matrix[rowIndex][colIndex];

            if (element === 0) {
                if (rowIndex === 0) {
                    isFirstRowZero = true;
                }

                if (colIndex === 0) {
                    isFirstColumnZero = true;
                }

                matrix[rowIndex][0] = 0;
                matrix[0][colIndex] = 0;
            }
        }
    }

    // Traverse each row
    for (let rowIndex = 1; rowIndex < matrix.length; rowIndex++) {
        if (matrix[rowIndex][0] === 0) {
            for (let index = 1; index < matrix[0].length; index++) {
                matrix[rowIndex][index] = 0;
            }
        }
    }

    // Traverse each column
    for (let colIndex = 1; colIndex < matrix[0].length; colIndex++) {
        if (matrix[0][colIndex] === 0) {
            for (let index = 1; index < matrix.length; index++) {
                matrix[index][colIndex] = 0;
            }
        }
    }

    if (isFirstRowZero) {
        matrix[0].forEach((_, index, array) => array[index] = 0);
    }

    if (isFirstColumnZero) {
        matrix.forEach((array) => array[0] = 0);
    }
};