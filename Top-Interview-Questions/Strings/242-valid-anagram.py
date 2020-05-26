class Solution:
    # Sol 1. Using Counter (Dict)
    def isAnagram(self, s: str, t: str) -> bool:
        s_len = len(s)
        t_len = len(t)
        if s_len != t_len:
            return False
        
        s_count = Counter(s)
        t_count = Counter(t)
    
        if s_count == t_count:
            return True
        else:
            return False

    # Timce Complexity: O(n+m)
    # Space Complexity: O(n+m)
    # Run Code Runtime: 40 ms
    # Submit Runtime: 36 ms, 92.80% faster
    # Submit Memory: 14.3 mb, 6.25% less

    # if it is the unicode, declare an empty array 2**16
    # utf-8 vs utf-16
    # utf-8 is general term
    # utf-16 is every case for characters

    # Sol 2. Use one string memory:
    def isAnagram(self, s: str, t: str) -> bool:
        for a in t:
            s[a] -= 1
            if s[a] < 0:
                return False
        return True