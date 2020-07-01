/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 * Runtime: 5528 ms, faster than 5.12% of JavaScript online submissions for Word Search II. 푸하하하핰
 * Memory Usage: 45.9 MB, less than 70.68% of JavaScript online submissions for Word Search II.
 * TC: O(X * N * 4 * 3^(M - 1)), where N is the number of elements in board and M is maximum length of word and X is number of elements in dictionary
 * SC: O(X), where X is number of elements in dictionary
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

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 * Runtime: 168 ms, faster than 58.87% of JavaScript online submissions for Word Search II.
 * Memory Usage: 52.7 MB, less than 20.50% of JavaScript online submissions for Word Search II.
 * TC: O(N * 4 * 3^(M - 1)), where N is the number of elements in board and M is maximum length of word
 * SC: O(L), where L is the total number of letters in dictionary
 */
const rDir = [-1, 0, 0, 1];
const cDir = [0, 1, -1, 0];

var findWords = function(board, words) {
    if (!board || board.length === 0 || !board[0] || board[0].length === 0) {
        return [];
    } else if (!words || words.length === 0) {
        return [];
    }

    const trie = new Trie(words);
    const result = [];

    for (let row = 0; row <= board.length; row++) {
        for (let col = 0; col <= board[0].length; col++) {
            traverse(board, trie.header, new Set(), row, col, result, []);
        }
    }

    return result;
};

function traverse (board, node, visit, row, col, result, stack) {
    const key = makeKey(row, col);

    if (!isWithinRange(board, row, col)) {
        return;
    } else if (visit.has(makeKey(row, col))) {
        return;
    } else if (!node.children.has(board[row][col])) {
        return;
    }

    const c = board[row][col];
    const child = node.children.get(c);

    visit.add(key);
    stack.push(c)

    if (child.isWord) {
        result.push(stack.join(""));
        child.isWord = false;
    }

    for (let i = 0; i <= 3; i++) {
        traverse(board, child, visit, row + rDir[i], col + cDir[i], result, stack);
    }

    stack.pop();
    visit.delete(key);

    if (child.children.size === 0) {
        node.children.delete(c);
    }
}

function makeKey(row, col) {
    return `${row}-${col}`;
}

function isWithinRange (board, row, col) {
    return row >= 0 && row < board.length && col >= 0 && col < board[0].length;
}

function Trie (words) {
    this.header = new TrieNode();

    for (const word of words) {
        this.header.add(word);
    }
}

function TrieNode () {
    this.children = new Map();
    this.isWord = false;
}

TrieNode.prototype.add = function (string) {
    if (!string || string.length === 0) {
        this.isWord = true;

        return;
    }

    const c = string.charAt(0);
    const remainder = string.substring(1);

    let child;
    if (this.children.has(c)) {
        child = this.children.get(c);
    } else {
        child = new TrieNode();
        this.children.set(c, child);
    }

    child.add(remainder);
}