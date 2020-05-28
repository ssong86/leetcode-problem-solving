/**
 * @param {number} n
 * @return {string}
 * Runtime: 64 ms, faster than 40.44% of JavaScript online submissions for Count and Say.
 * Memory Usage: 37.4 MB, less than 8.33% of JavaScript online submissions for Count and Say.
 * TC: O(n), but since 1<=n<=30, it is also legit to say O(1)
 * SC: O(n), but since 1<=n<=30, it is also legit to say O(1)
 */
var countAndSay = function(n) {
    let str = '1';
    while (n > 1) {
        let newStr = '', count = 0, say = str[0];
        
        for (let i = 0; i < str.length; i += 1) {
            if (str[i] === say) {
                count += 1;
            } else {
                newStr += count + say;
                count = 1;
                say = str[i];
            }
        }
        str = newStr + count + say;
        n -= 1;
    }
    return str;
};