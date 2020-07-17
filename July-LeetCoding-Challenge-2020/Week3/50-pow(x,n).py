class Solution:
    # Sol 1. Chaeat
    def myPow(self, x: float, n: int) -> float:
        return x**n
    # TC: O(1)
    # SC: O(1)

    # Sol2. Bit Manipulation
    def myPow(self, x: float, n: int) -> float:
        if n < 0:
            x = 1/x
            n = -n
        result = 1
        while n:
            if n&1:
                result *= x
            n >>= 1
            x = x*x
        return result
    # TC: O(logn)
    # SC: O(1)