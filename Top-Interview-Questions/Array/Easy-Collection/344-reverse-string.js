/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (let start = 0, end = s.length - 1; start < end; start++, end--) {
        swapCharacters(s, start, end);
    }
};

function swapCharacters (array, idx1, idx2) {
    const tmp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = tmp;
}