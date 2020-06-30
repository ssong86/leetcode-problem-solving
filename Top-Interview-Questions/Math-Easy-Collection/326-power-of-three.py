class Solution:
    # Sol 1. Iteration
    def isPowerOfThree(self, n: int) -> bool:
        if n < 1: 
            return False
        while n%3 == 0:
            n //= 3
        return n==1
    # TC: O(log n of base 3)
    # SC: O(1)
    # Runtime: 80 ms, faster than 66.80% 
    # Memory Usage: 13.6 MB, less than 98.84%

    # Sol 2. Log func
    def isPowerOfThree(self, n: int) -> bool:
        if n < 1:
            return False
        return (math.log(n)/math.log(3)) % 1 <= 2 * sys.float_info.epsilon    
    # TC: O(1) in our case because we only use integers for this problem.
    # SC: O(1)