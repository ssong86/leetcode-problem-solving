/**
 * @param {string[]} strs
 * @return {string}
 * Runtime: 76 ms, faster than 23.94% of JavaScript online submissions for Longest Common Prefix.
 * Memory Usage: 39.1 MB, less than 6.25% of JavaScript online submissions for Longest Common Prefix.
 * TC: O(LN), where L is the average length of strings in strs, and M is number of elements in strs
 * SC: O(1), assuming we're not counting output
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) {
        return "";
    } else if (strs.length === 1) {
        return strs[0];
    }
    
    const result = [];
    const pivot = strs[0];
    for (let index = 0; index < pivot.length; index++) {
        const candidate = pivot.charAt(index);
        
        for (const str of strs) {
            if (candidate !== str.charAt(index)) {
                return result.join("");
            }
        }
        
        result.push(candidate);
    }
    
    return result.join("");
};