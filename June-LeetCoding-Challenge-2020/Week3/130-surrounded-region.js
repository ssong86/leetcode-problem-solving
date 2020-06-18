/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const hDir = [-1, 0, 1, 0];
const vDir = [0, -1, 0, 1];
const BOARD = Object.freeze({ X: 'X', O: 'O' });
const STATE = Object.freeze({ VISITED_X: 'VX', VISITED_O: 'VO'});

var solve = function(board) {
    if (board) {
        for (let row = 1; row < board.length - 1; row++) {
            for (let col = 1; col < board[0].length - 1; col++) {
                if (board[row][col] === BOARD.O) {
                    expandArea(row, col, board);
                }
            }
        }

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                if (hasVisited(row, col, board)) {
                    board[row][col] = board[row][col] === STATE.VISITED_X ? BOARD.X : BOARD.O;
                }
            }
        }
    }
};

function expandArea (x, y, board) {
    if (isOnBorder(x, y, board) || hasVisited(x, y, board) || board[x][y] === BOARD.X) {
        if (board[x][y] === BOARD.O) {
            board[x][y] = STATE.VISITED_O;
        }

        if (board[x][y] === BOARD.X) {
            board[x][y] = STATE.VISITED_X;
        }

        return board[x][y] === STATE.VISITED_X;
    }

    board[x][y] = STATE.VISITED_X;

    for (let idx = 0; idx < 4; idx++) {
        const newX = x + vDir[idx], newY = y + hDir[idx];
        const isExpandable = expandArea(newX, newY, board);

        if (!isExpandable) {
            board[x][y] = STATE.VISITED_O;

            return false;
        }
    }

    return true;
}

function hasVisited (x, y, board) {
    return board[x][y] === STATE.VISITED_O || board[x][y] === STATE.VISITED_X;
}

function isOnBorder (x, y, board) {
    return (x <= 0 || x >= board.length - 1) || (y <= 0 || y >= board[0].length - 1);
}

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * Runtime: 84 ms, faster than 80.29% of JavaScript online submissions for Surrounded Regions.
 * Memory Usage: 40.3 MB, less than 93.38% of JavaScript online submissions for Surrounded Regions.
 * TC: O(N + N), where N is the number of elements in board
 * SC: O(1) ~ O(N), where N is the number of elements in board
 */

const hDir = [-1, 0, 1, 0];
const vDir = [0, -1, 0, 1];
const BOARD = Object.freeze({ X: 'X', O: 'O' });
const STATE = Object.freeze({ VISITED_X: 'VX', VISITED_O: 'VO'});

var solve = function(board) {
    if (board && board.length > 0 && board[0].length > 0) {
        for (let row = 0; row < board.length; row++) {
            expandArea2(row, 0, board);
            expandArea2(row, board[0].length - 1, board);
        }

        for (let col = 0; col < board[0].length; col++) {
            expandArea2(0, col, board);
            expandArea2(board.length - 1, col, board);
        }

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                if (board[row][col] === STATE.VISITED_O) {
                    board[row][col] = BOARD.O;
                } else if (board[row][col] === BOARD.O) {
                    board[row][col] = BOARD.X;
                }
            }
        }
    }
};

function expandArea2 (x, y, board) {
    if (!isOutOfBorder(x, y, board) && !hasVisited(x, y, board) && board[x][y] === BOARD.O) {
        board[x][y] = STATE.VISITED_O;

        for (let idx = 0; idx < 4; idx++) {
            const newX = x + vDir[idx], newY = y + hDir[idx];

            expandArea2(newX, newY, board);
        }
    }
}

function hasVisited (x, y, board) {
    return board[x][y] === STATE.VISITED_O || board[x][y] === STATE.VISITED_X;
}

function isOutOfBorder (x, y, board) {
    return (x < 0 || x > board.length - 1) || (y < 0 || y > board[0].length - 1);
}


const board =
    [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
console.log(board);
console.log();
solve2(board);
console.log(board);