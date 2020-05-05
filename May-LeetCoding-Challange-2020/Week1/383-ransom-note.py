class Solution:
    # Sol 1. using Counter, Brute force
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        # Edge case: if len(ransomNote ) > len(magazine): False
        ran_col = collections.Counter(ransomNote)
        mag_col = collections.Counter(magazine)
        return ran_col&mag_col==ran_col
        # Time Complexity: O(n)
        # Space Complexity: O(n)