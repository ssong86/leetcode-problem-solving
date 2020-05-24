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