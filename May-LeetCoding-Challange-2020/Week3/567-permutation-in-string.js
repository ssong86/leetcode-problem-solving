/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * Runtime: 88 ms, faster than 52.93% of JavaScript online submissions for Permutation in String.
 * Memory Usage: 35.8 MB, less than 100.00% of JavaScript online submissions for Permutation in String.
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    const hashTable = new Array(26).fill(0);

    for (const c of s1) {
        const index = getCodePoint(c);

        hashTable[index]++;
    }

    let start = 0, end = 0, size = s1.length;

    while (end < s2.length) {
        if (end - start === s1.length) {
            const codePointAtStart = getCodePoint(s2.charAt(start));

            if (hashTable[codePointAtStart] >= 0) {
                size++;
            }

            hashTable[codePointAtStart]++;
            start++;
        }

        const codePointAtEnd = getCodePoint(s2.charAt(end));

        hashTable[codePointAtEnd]--;
        end++;

        if (hashTable[codePointAtEnd] >= 0) {
            size--;
        }

        if (size === 0) {
            return true;
        }
    }

    return false;
};

function getCodePoint (char) {
    return char.charCodeAt(0) % 'a'.charCodeAt(0);
}