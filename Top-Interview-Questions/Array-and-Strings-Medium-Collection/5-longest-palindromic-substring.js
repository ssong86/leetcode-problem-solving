/**
 * @param {string} s
 * @return {string}
 * Runtime: 96 ms, faster than 75.85% of JavaScript online submissions for Longest Palindromic Substring.
 * Memory Usage: 37.6 MB, less than 55.97% of JavaScript online submissions for Longest Palindromic Substring.
 * TC: O(N^2)
 * SC: O(1)
 */
var longestPalindrome = function(s) {
    if (!s || s.length < 2) {
        return s;
    }

    let maxStart = 0, maxLength = 0;
    for(let i = 0; i < s.length; i++){
        let extending = 1;
        if(isPalindrome(s, i - maxLength - extending, i) || isPalindrome(s, i - maxLength - --extending, i)){
            maxStart = i - maxLength - extending;
            maxLength += extending + 1;
        }
    }

    return s.substring(maxStart, maxStart + maxLength);
};

function isPalindrome (s, start, end) {
    if (start < 0 || start >= s.length || end < 0 || end >= s.length) {
        return false;
    }

    while(start < end) {
        if (s.charAt(start) !== s.charAt(end)) {
            return false;
        }

        start++;
        end--;
    }

    return true;
}