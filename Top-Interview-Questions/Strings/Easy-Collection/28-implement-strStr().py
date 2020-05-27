class Solution:
    # Sol 1. Using Find built-in function
    def strStr(self, haystack: str, needle: str) -> int:
        
        return haystack.find(needle)
        # find returns -1 if no such string
        # index returns error if searching is not present
    # TC: O(n)
    # SC: O(1)
    # Runtime: 32ms, 58.97% faster
    # Memory: 14.1 MB, 12.31% less

    # Sol 2. Sliding Windows
    def strStr(self, haystack: str, needle: str) -> int:
        if len(needle) == 0:
            return 0 # corner case
        for i in range(len(haystack)): # traverse each index, len(heystack) - len(needle) + 1 will be faster
                                       # no need to look up the element after the haystack 
            if haystack[i:i+len(needle)] == needle:
                return i
        return -1
    # TC: O(n), where n is the length of haystack, worst case is that
    # we have to go thru all the element in haystack and needle length is one, and 
    # the index is located in the last poition of haystack
    # SC: O(n), no additional memories
    # Runtime: 36 ms, faster than 41.06%
    # Space: 13.9 MB, less than 12.31%
