/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * Runtime: 100 ms, faster than 73.01% of JavaScript online submissions for Find All Anagrams in a String.
 * Memory Usage: 37.3 MB, less than 100.00% of JavaScript online submissions for Find All Anagrams in a String.
 */
var findAnagrams = function(s, p) {
    const hashTable = new Array(26).fill(0);
    const result = [];

    if (!s || !p || s.length < p.length) {
        return result;
    }

    for (const c of p) {
        hashTable[getCodePoint(c)]++;
    }

    let start = 0, end = 0, size = p.length;

    while (end < s.length) {
        if (end - start === p.length) {
            const codePointAtStart = getCodePoint(s.charAt(start));

            if (hashTable[codePointAtStart] >= 0) {
                size++;
            }

            hashTable[codePointAtStart]++;
            start++;
        }

        const codePointAtEnd = getCodePoint(s.charAt(end));

        hashTable[codePointAtEnd]--;
        end++;

        if (hashTable[codePointAtEnd] >= 0) {
            size--;
        }

        if (size === 0) {
            result.push(start);
        }
    }

    return result;
};

function getCodePoint (char) {
    return char.charCodeAt(0) % 'a'.charCodeAt(0);
}

console.log(findAnagrams("cbaebabacd", "abc"));

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams2 = function(s, p) {
    if (!s || !p || s.length < p.length) {
        return [];
    }

    let pSumOfPow = 0, pSum = 0;
    const anagramSize = p.length;
    const result = [];

    for (const char of p) {
        pSumOfPow += getASCIIPoweredByTwo(char);
        pSum += getASCII(char);
    }

    let start = 0, end = -1, currentSumOfPow = 0, currentSum = 0;
    while (end < s.length) {
        if (end - start + 1 < anagramSize) {
            currentSumOfPow += getASCIIPoweredByTwo(s.charAt(++end));
            currentSum += getASCII(s.charAt(end));
        } else {
            if (currentSumOfPow === pSumOfPow && currentSum === pSum) {
                result.push(start);
            }

            currentSum -= getASCII(s.charAt(start));
            currentSumOfPow -= getASCIIPoweredByTwo(s.charAt(start++));
            currentSumOfPow += getASCIIPoweredByTwo(s.charAt(++end));
            currentSum += getASCII(s.charAt(end));
        }
    }

    return result;
};

function getASCIIPoweredByTwo (char) {
    return Math.pow(getASCII(char), 2);
}

function getASCII (char) {
    return char.charCodeAt(0) % 'a'.charCodeAt(0) + 1;
}

console.log(findAnagrams2("cbaebabacd", "abc"));

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams3 = function(s, p) {
    if (!s || !p || s.length < p.length) {
        return [];
    }

    let pBitVector = 0;
    const anagramSize = p.length;
    const result = [];

    for (const char of p) {
        pBitVector += getASCII(char);
    }

    let start = 0, end = -1, currentBitVector = 0;
    while (end < s.length) {
        if (end - start + 1 < anagramSize) {
            currentBitVector += (1 << getASCII(s.charAt(end)));
        } else {
            if (currentBitVector === pBitVector) {
                result.push(start);
            }

            currentBitVector -= getASCII(s.charAt(start++));
            currentBitVector += getASCII(s.charAt(++end));
        }
    }

    return result;
};

function getASCII (char) {
    return char.charCodeAt(0) % 'a'.charCodeAt(0) + 1;
}

console.log(findAnagrams2("cbaebabacd", "abc"));