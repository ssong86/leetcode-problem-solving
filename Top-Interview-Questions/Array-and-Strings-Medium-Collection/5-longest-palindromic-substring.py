class Solution:
    def longestPalindrome(self, s: str) -> str:
        def pal_check(l, r):
            while (l >= 0 and r < len(s) and s[l] == s[r]):
                l -= 1
                r += 1
                   
            return s[l+1:r] # in case l = 0
        
        res = ""
        for i in range(len(s)):
            test = pal_check(i,i) # odd case
            if len(test) > len(res): res = test
            test2 = pal_check(i,i+1) # even case
            if len(test2) > len(res): res = test2
                   
        return res
    # TC: O(n*n)
    # SC: O(n*n)
    # short circuit
    # && or || operator -> check the second condition only if the first condition is true