class Solution:
    # Sol 1. Hash Set
    def numJewelsInStones(self, J: str, S: str) -> int:
        jewels = set(J)
        how_many_jewels = 0
        for s in S:
            if s in jewels:
                how_many_jewels += 1
        return how_many_jewels
    # Time Complexity: O(n)
    # Space Complexity: O(n)