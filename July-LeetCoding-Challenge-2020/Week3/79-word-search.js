/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * Runtime: 88 ms, faster than 91.28% of JavaScript online submissions for Word Search.
 * Memory Usage: 38.6 MB, less than 72.31% of JavaScript online submissions for Word Search.
 * TC: O(N^2), where N is number of elements in a board
 * SC: O(N), where N is number of elements in a board
 */
const vDir = [0, 0, -1, 1];
const hDir = [-1, 1, 0, 0];

var exist = function(board, word) {
    if (!board || !board[0] || board.length === 0 || board[0].length === 0) {
        return false;
    } else if (!word || word.length === 0) {
        return true;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (traverse(board, word, i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};

function traverse (board, word, i, j, depth) {
    if (depth === word.length) {
        return true;
    } else if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
        return false;
    }

    const char = board[i][j];

    if (char === "#" || char !== word.charAt(depth)) {
        return false;
    }

    board[i][j] = "#";

    for (let dir = 0; dir <= 3; dir++) {
        if (traverse(board, word, i + hDir[dir], j + vDir[dir], depth + 1)) {
            return true;
        }
    }

    board[i][j] = char;

    return false;
}