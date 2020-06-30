/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 * Runtime: 5528 ms, faster than 5.12% of JavaScript online submissions for Word Search II. 푸하하하핰
 * Memory Usage: 45.9 MB, less than 70.68% of JavaScript online submissions for Word Search II.
 */
const hDir = [-1, 0, 0, 1];
const vDir = [0, -1, 1, 0];

var findWords = function(board, words) {
    if (!words || words.length === 0 || !board || !board[0]) {
        return [];
    }

    const result = [];

    for (const word of words) {
        if (findWord(board, word)) {
            result.push(word);
        }
    }

    return result;
};

function findWord (board, word) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (traverseBoard(board, word, new Set(), row, col, 0)) {
                return true;
            }
        }
    }

    return false;
}

function traverseBoard (board, word, visitSet, rowIdx, colIdx, currIdx) {
    if (currIdx === word.length) {
        return true;
    } else if (rowIdx < 0 || rowIdx >= board.length || colIdx < 0 || colIdx >= board[0].length) {
        return false;
    } else if (visitSet.has(`${rowIdx}${colIdx}`)) {
        return false;
    } else if (board[rowIdx][colIdx] !== word.charAt(currIdx)) {
        return false;
    }

    visitSet.add(`${rowIdx}${colIdx}`);

    for (let idx = 0; idx <= 3; idx++) {
        if (traverseBoard(board, word, visitSet, rowIdx + vDir[idx], colIdx + hDir[idx], currIdx + 1)) {
            return true;
        }
    }

    visitSet.delete(`${rowIdx}${colIdx}`);

    return false;
}