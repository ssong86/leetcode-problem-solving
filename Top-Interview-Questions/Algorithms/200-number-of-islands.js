/**
 * @param {character[][]} grid
 * @return {number}
 * Runtime: 68 ms, faster than 56.80% of JavaScript online submissions for Number of Islands.
 * Memory Usage: 37.2 MB, less than 100.00% of JavaScript online submissions for Number of Islands.
 * Time Complexity: O(N), where N is the number of elements in a grid
 * Space Complexity: O(N), where N is the number of elements in a grid
 */

const ISLAND                = '1';
const WATER                 = '0';
const VISITED_ISLAND        = '2';
const H_DIRECTION_INDICATOR = [0, 0, 1, -1];
const V_DIRECTION_INDICATOR = [1, -1, 0, 0];

var numIslands = function(grid) {
    if (!grid) {
        return 0;
    }

    let numOfIsland = 0;
    for (let rowIdx = 0; rowIdx < grid.length; rowIdx++) {
        for (let colIdx = 0; colIdx < grid[0].length; colIdx++) {
            if (grid[rowIdx][colIdx] === ISLAND) {
                numOfIsland++;

                traverseIsland(grid, rowIdx, colIdx);
            }
        }
    }

    return numOfIsland;
};

function traverseIsland (grid, rowIdx, colIdx) {
    if (rowIdx < 0 || rowIdx >= grid.length || colIdx < 0 || colIdx >= grid[0].length) {
        return;
    } else if (grid[rowIdx][colIdx] === VISITED_ISLAND || grid[rowIdx][colIdx] === WATER) {
        return;
    }

    grid[rowIdx][colIdx] = VISITED_ISLAND;

    for (let index = 0; index < 4; index++) {
        traverseIsland(grid, rowIdx + V_DIRECTION_INDICATOR[index], colIdx + H_DIRECTION_INDICATOR[index]);
    }
}