class Solution:
    def reverseBits(self, n: int) -> int:
        rev_n = 0
        shift = 31
        while n:
            rev_n += (n&1) << shift
            n >>= 1
            shift -= 1
        
        return rev_n
    # TC: O(1)
    # SC: O(1)