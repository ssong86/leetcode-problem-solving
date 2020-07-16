class Solution:
    def reverseWords(self, s: str) -> str:
        return " ".join(reversed(s.split()))

    # TC: O(n), split runs n words in the string
    # SC: O(n), split provides n words space