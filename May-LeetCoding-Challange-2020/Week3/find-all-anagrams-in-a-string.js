/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (!s || !p || s.length < p.length) {
        return [];
    }

    const map = new CustomMap(p);
    const anagramSize = p.length;
    const result = [];

    let start = 0, end = -1;
    while (end < s.length) {
        console.log(map.map, start, end);
        if (end - start + 1 < anagramSize) {
            map.decrementByKey(s.charAt(++end));
        } else {
            if (map.isEmpty()) {
                result.push(start);
            }

            if (map.isValidInput(s.charAt(start))) {
                map.incrementByKey(s.charAt(start));
            }
            console.log(map.map);

            start++;
            end++;

            map.decrementByKey((s.charAt(end)));
        }
    }

    return result;
};

function CustomMap (string) {
    this.map = new Map();
    this.set = new Set();

    for (const char of string) {
        this.incrementByKey(char);
        this.set.add(char);
    }
}

CustomMap.prototype.decrementByKey = function (key) {
    if (this.map.has(key)) {
        if (this.map.get(key) === 1) {
            this.map.delete(key);
        } else {
            this.map.set(key, this.map.get(key) - 1);
        }
    }
}

CustomMap.prototype.incrementByKey = function (key) {
    if (this.map.has(key)) {
        this.map.set(key, this.map.get(key) + 1);
    } else {
        this.map.set(key, 1);
    }
}

CustomMap.prototype.isValidInput = function (key) {
    return this.set.has(key);
}

CustomMap.prototype.isEmpty = function () {
    return this.map.size === 0;
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