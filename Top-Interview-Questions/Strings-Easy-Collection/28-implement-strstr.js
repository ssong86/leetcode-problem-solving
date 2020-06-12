/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * Runtime: 72 ms, faster than 31.77% of JavaScript online submissions for Implement strStr().
 * Memory Usage: 38.5 MB, less than 7.14% of JavaScript online submissions for Implement strStr().
 */
var strStr = function(haystack, needle) {
    let index = -1;

    if(haystack.length && needle) {
        for(let i = 0; i < haystack.length; ++i) {
            if(haystack[i] === needle[0]) {
                if(haystack.substring(i, i + needle.length) === needle) {
                    return i;
                }

            }
        }
    } else if(!needle)
        return 0;
    return index;
};