class Solution:
    # Sol 1. Brute Force
    def longestCommonPrefix(self, strs: List[str]) -> str: # inputs are all lower case a-z, 26 letters
        ret_str = ""
        if len(strs) < 1:
            return ret_str

        prefix_str = min(strs, key=len)
        for i in range(len(prefix_str)):
            for s in strs:
                if s[i]!=prefix_str[i]:
                    return prefix_str[:i] 
                      
        return prefix_str
    
    # TC: O(n), worst case: prefix of a entire string
    # SC: O(n), splitting string uses extra memory
    # Runtime: 32 ms, faster than 74.43%
    # Memory: 13.9 MB, less than 6.67% 
