/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
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

    console.log(isFirstRowZero, isFirstColumnZero);

    // Traverse rows
    for (let rowIndex = 1; rowIndex < matrix.length; rowIndex++) {
        if (matrix[rowIndex][0] === 0) {
            for (let index = 1; index < matrix[rowIndex].length; index++) {
                matrix[rowIndex][index] = 0;
            }
        }
    }

    // Traverse columns
    for (let colIndex = 1; colIndex < matrix[0].length; colIndex++) {
        if (matrix[0][colIndex] === 0) {
            for (let index = 1; index < matrix.length; index++) {
                matrix[index][colIndex] = 0;
            }
        }
    }

    if (isFirstRowZero) {
        matrix.forEach((_, index, array) => array[index][0] = 0);
    }

    if (isFirstColumnZero) {
        matrix[0].forEach((_, index, array) => array[index] = 0);
    }
};

const matrix = [[1,0,3]];

matrix.forEach(rows => console.log(rows + '\n'));

setZeroes(matrix);

matrix.forEach(rows => console.log(rows + '\n'));