/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 * Runtime: 72 ms, faster than 73.65% of JavaScript online submissions for Coin Change 2.
 * Memory Usage: 36.8 MB, less than 57.87% of JavaScript online submissions for Coin Change 2.
 * TC: O(MN), where M is amount and N is the number of element in coins
 * SC: O(M), where M is amount
 */
var change = function(amount, coins) {
    const memo = new Array(amount + 1).fill(0);

    memo[0] = 1;
    for (const coin of coins) {
        for (let index = coin; index <= amount; index++) {
            memo[index] += memo[index - coin];
        }
    }

    return memo[amount];
};

/*

5, [1, 2, 5]

[1] 로 5 를 만들기
[1] 을 한 개만 쓸 경우: [1] 로 4 를 만들기 (memo[0][4]에 저장)
[1] 을 두 개를 쓸 경우: [1] 로 3 을 만들기 (memo[0][3]에 저장)
[1] 을 세 개를 쓸 경우: [1] 로 2 를 만들기 (memo[0][2]에 저장)
.... 다 해서 [1] 로 모든 경우의 수를 구했다!

[1,2] 로 5 를 만들기
[2] 를 한 개만 쓸 경우: [1] 로 3 을 만들기 (중복! 이미 [1] 을 두 개를 쓸 경우가 저장돼 있다.) (memo[1][3]에 저장)
[2] 를 두 개만 쓸 경우: [1] 로 1 을 만들기 (중복! 이미 [1] 을 네 개를 쓸 경우가 저장돼 있다.) (memo[1][1]에 저장)
.... 다 해서 [1, 2] 로 모든 경우의 수를 구했다

[1,2,5] 로 5 를 만들기
[5] 를 한 개만 쓸 경우: 완성!

총 네 개!

이런 방식 으로 진행 한다면 우리가 미리 저장해 놓아야 할 배열의 크기는 O(amount * coins.length) 이 된다.
이렇게 할 필요 없이 O(amount) 으로도 해결 가능!
 */