class Solution:
    # Sol 1. XOR
    def hammingDistance(self, x: int, y: int) -> int:
        xor = x^y
        hamming_d = 0
        while xor:
            if xor&1:
                hamming_d += 1
            xor >>= 1 # = //2
        return hamming_d
    # TC: O(1), fixed size loop, integer, 2^32
    # SC: O(1)
    # Runtime: 44 ms, faster than 10.74%
    # Memory Usage: 14 MB, less than 6.95%

    # Sol 2. XOR and binary count func
    def hammingDistance(self, x: int, y: int) -> int:
        xor = x^y
        return bin(xor).count('1')
    # TC: O(1)
    # SC: O(1)