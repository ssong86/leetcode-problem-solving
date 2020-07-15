class Solution:
    def reverseWords(self, s: str) -> str:
        return " ".join(reversed(s.split()))

    # TC: O(1)
    # SC: O(n), split provides n words space