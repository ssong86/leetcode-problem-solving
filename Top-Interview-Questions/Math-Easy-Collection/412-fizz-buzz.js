/**
 * @param {number} n
 * @return {string[]}
 * Runtime: 72 ms, faster than 53.34% of JavaScript online submissions for Fizz Buzz.
 * Memory Usage: 37.6 MB, less than 50.85% of JavaScript online submissions for Fizz Buzz.
 * TC: O(n)
 * SC: O(1), if we exclude returning memory
 */
var fizzBuzz = function(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        const fizz = i % 3 === 0 ? "Fizz" : "";
        const buzz = i % 5 === 0 ? "Buzz" : "";

        if (fizz.length === 0 && buzz.length === 0) {
            result.push(i.toString());
        } else {
            result.push(`${fizz}${buzz}`);
        }
    }

    return result;
};