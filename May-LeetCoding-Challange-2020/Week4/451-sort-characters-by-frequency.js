/**
 * @param {string} s
 * @return {string}
 * Solution:    Using a map and bucket sort
 * TC:          O(N), where N is the length of a string
 * SC:          O(N + N), where N is the length of a string (we can talk about best/worst case scenarios)
 * Example:     tree
 ** wordMap:        Map { 't' => 1, 'r' => 1, 'e' => 2 }
 ** countArray:     [ null, [ 't', 'r' ], [ 'e' ], null, null ]
 * Runtime: 84 ms, faster than 41.65% of JavaScript online submissions for Sort Characters By Frequency.
 * Memory Usage: 42.9 MB, less than 61.54% of JavaScript online submissions for Sort Characters By Frequency.
 */

 /* bucket sort
  * time complexity: O(n+k)
  * ex) 사람 태어난 년도
  * 1800 1810, 1820, 1830 bucket 에 넣어서 계산
  * 
  * radix sort -> O(n)
  * 32 bit 
  * 
  * 두가지 케이스는 사용할 수 있는 경우가 정해져 있음, 고로 일반적으론 nlogn
  */
var frequencySort = function(s) {
    if (!s || s.length === 1) {
        return s;
    }

    const wordMap = new Map();
    for (const char of s) {
        if (wordMap.has(char)) {
            wordMap.set(char, wordMap.get(char) + 1);
        } else {
            wordMap.set(char, 1);
        }
    }

    const countArray = new Array(s.length + 1).fill(null);
    for (const [char, count] of wordMap.entries()) {
        if (countArray[count]) {
            countArray[count].push(char);
        } else {
            countArray[count] = [char];
        }
    }

    let globalCount = 0;
    const result = new Array(s.length);
    for (let currentCount = s.length; currentCount > 0; currentCount--) {
        if (countArray[currentCount]) {
            for (const char of countArray[currentCount]) {
                let loopCount = currentCount;

                while (loopCount > 0) {
                    result[globalCount++] = char;

                    loopCount--;
                }
            }
        }
    }

    return result.join("");
};

var frequencySort = function(s) {
    const counts = {};

    for (const sym of s) {
        let res = counts[sym];
        counts[sym] = res ? ++res : 1;
    }

    return Object.keys(counts)
        .sort((a, b) => counts[b] - counts[a])
        .reduce((res, s) => res + s.repeat(counts[s]), '')
};