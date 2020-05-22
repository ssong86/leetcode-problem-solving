/**
 * @param {number[][]} matrix
 * @return {number}
 * Runtime: 72 ms, faster than 99.38% of JavaScript online submissions for Count Square Submatrices with All Ones.
 * Memory Usage: 39.9 MB, less than 100.00% of JavaScript online submissions for Count Square Submatrices with All Ones.
 *
 * [0 1 1 1]    [0 1 1 1]    [0 1 1 1]
 * [1 1 1 1] -> [1 1 2 2] -> [1 1 2 2] -> Sum is 15
 * [0 1 1 1]    [0 1 1 1]    [0 1 2 3]
 */
var countSquares = function(matrix) {
    if (!matrix) {
        return 0;
    }

    for (let rowIdx = 1; rowIdx < matrix.length; rowIdx++) {
        for (let colIdx = 1; colIdx < matrix[0].length; colIdx++) {
            let countOfSquares = matrix[rowIdx][colIdx];

            if (countOfSquares > 0) {
                countOfSquares = Math.min (
                    matrix[rowIdx - 1][colIdx - 1],
                    Math.min (
                        matrix[rowIdx - 1][colIdx],
                        matrix[rowIdx][colIdx - 1]
                    )
                );

                matrix[rowIdx][colIdx] += countOfSquares;
            }
        }
    }

    return matrix.reduce((rowAcc, rowCur) => {
        return rowAcc + rowCur.reduce((acc, num) => acc + num, 0);
    }, 0);
};