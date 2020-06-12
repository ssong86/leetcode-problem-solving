class Solution:
    # Sol 1. Math
    def reverse(self, x: int) -> int:
        ans = 0
        sign = False

        # edge case
        if x>-10 and x<10:
            return x
                
        if x<0:
            sign = True
            x = abs(x)
        
        while(x>0):
            m = x%10
            ans = ans*10 + m
            x = x//10
        
        if sign:
            ans = -1 * (ans)
        
        # overflow control, you can put this in the while loop
        if ans < -(2**31) or ans > (2**31-1):
            return 0
        
        return ans
    # Time Complexity: O(logn), n/10 continuous
    # Space Complexity: O(1), no additional space
    # Run Code Runtime: 56 ms
    # Submit Runtime: 32 ms, 61.69% faster
    # Submit Runtime: 13.7 mb, 5.26% faster