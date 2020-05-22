/**
 * @param {number} x
 * @return {number}
 * Runtime: 92 ms, faster than 17.93% of JavaScript online submissions for Reverse Integer.
 * Memory Usage: 36.5 MB, less than 11.46% of JavaScript online submissions for Reverse Integer.
 * Time Complexity: O(N) where N is the number of digits in a given number
 */
const MIN_32_INT = 1 << 31;
const MAX_32_INT = ~MIN_32_INT;

var reverse = function(x) {
    if (x > -10 && x < 10) {
        return x;
    }

    let isNegative = false;
    if (x < 0) {
        isNegative = true;
        x = -x;
    }

    while (isDivisibleBy10(x)) {
        x = divideBy10Int(x);
    }

    let result = 0;
    while (x > 0) {
        result += x % 10;
        x = divideBy10Int(x);

        if (x > 0) {
            result *= 10;
        }

        if (result < MIN_32_INT || result > MAX_32_INT) {
            return 0;
        }
    }

    return isNegative ? -result : result;
};

function divideBy10Int (x) {
    return Math.floor(x / 10);
}

function isDivisibleBy10 (x) {
    return x % 10 === 0;
}