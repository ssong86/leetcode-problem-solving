class Solution:
    # Sol 1. Using Counter, Brute Force
    def firstUniqChar(self, s: str) -> int:
        c = collections.Counter(s)
        print(c)
        for idx, ch in enumerate(s): # Enumerate returns (count as index, character)
            if c[ch] == 1:
                return idx
        return -1
        # Time Complexity: O(n)
        # Space Complexity: O(n)
        