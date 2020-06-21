/**
 * @param {string} S
 * @return {string}
 * TC: O(N^2), where N is length of S
 * SC: O(N) ~ O(N^2), where N is length of S
 */
var longestDupSubstring = function(S) {
    if (!S || S.length <= 1) {
        return "";
    }

    const map = {};

    for (let length = S.length - 1; length > 1; length--) {
        const set = new Set();
        for (let idx = 0; idx <= S.length - length; idx++) {
            const substr = S.substr(idx, length);

            if (set.has(substr)) {
                return substr;
            } else {
                set.add(substr);
            }
        }
    }

    return "";
};

/**
 * @param {string} S
 * @return {string}
 * TC: O(KN), where K is average depth of trie and N is length of S
 * SC: O(N)
 */
var longestDupSubstring = function(S) {
    if (!S || S.length <= 1) {
        return "";
    }

    const header = new Trie(0, 0);
    let start = 0, maxLength = 0;
    for (let index = 1; index < S.length - maxLength; index++) {
        const length = header.add(S, index);

        if (maxLength < length) {
            maxLength = length;
            start = index;
        }
    }

    return S.substring(start, start + maxLength);
};

/**
 * @param {int} startIndex
 * @param {int} currentDepth
 */
function Trie (startIndex, currentDepth) {
    this.children = null;
    this.depth = currentDepth;
    this.startIndex = startIndex;
}

/**
 * @return {boolean}
 */
Trie.prototype.isLeafNode = function () {
    return !this.children;
}

/**
 * @param {string} string
 * @param {int} index
 * @return {int}
 */
Trie.prototype.getCodePointOf = function (string, index) {
    return string.charCodeAt(index + this.depth) - 'a'.charCodeAt(0);
}

/**
 * @param {string} string
 * @param {int} index
 * @return {int}
 */
Trie.prototype.add = function (string, index) {
    if (this.depth + index === string.length) {
        return this.depth;
    }

    if (this.isLeafNode()) {
        const parentIndex = this.getCodePointOf(string, this.startIndex);

        this.children = new Array(26).fill(null);
        this.children[parentIndex] = new Trie(this.startIndex, this.depth + 1);
    }

    const childIndex = this.getCodePointOf(string, index);
    const child = this.children[childIndex];

    if (!child) {
        this.children[childIndex] = new Trie(index, this.depth + 1);

        return this.depth;
    }

    return child.add(string, index);
}