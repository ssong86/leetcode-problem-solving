class Solution:
    # Sol 1. Tow's Complement
    def isPowerOfTwo(self, n: int) -> bool:
        if n is 0:
            return False
        return n & (-n) == n
    # TC: O(1)
    # SC: O(1)


    def isPowerOfTwo(self, n: int) -> bool:
        if n is 0:
            return False
       
        while n%2 == 0:
            n = n//2
        
        return n==1
    # TC: O(logn)
    # SC: O(1)