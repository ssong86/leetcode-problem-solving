/**
 * @param {number} n
 * @return {number}
 * Runtime: 120 ms, faster than 88.48% of JavaScript online submissions for Count Primes.
 * Memory Usage: 48.9 MB, less than 71.01% of JavaScript online submissions for Count Primes.
 * TC: O(n)
 * -> 1/2 + 1/4 + 1/8 + 1/16 + 1/32 ... = n
 * -> n + n/2 + n/3 + n/5 + n/7 + n/11 + n/13 + n/17 + n/19 ...
 * SC: O(n)
 */
var countPrimes = function(n) {
    if (n <= 1) {
        return 0;
    }

    const visit = new Array(n + 1).fill(false);
    let primeCount = 0;

    for (let i = 2; i < n; i++) {
        if (!visit[i]) {
            primeCount++;

            for (let j = i; j < n; j += i) {
                visit[j] = true;
            }
        }
    }

    return primeCount;
};