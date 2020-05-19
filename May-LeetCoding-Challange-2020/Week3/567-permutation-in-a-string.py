class Solution:
    # Sol 1. Using Counter, Hash
    def findAnagrams(self, s: str, p: str) -> List[int]:
        s_len = len(s)
        p_len = len(p)
        
        if s_len < p_len:
            return []
        
        p_count = Counter(p)
        s_count = Counter()
        result = []
        
        for i in range(s_len):
            s_count[s[i]] += 1
            
            if i>= p_len:
                if s_count[s[i-p_len]] == 1:
                    del s_count[s[i-p_len]]
                else:
                    s_count[s[i-p_len]] -= 1
                    
            if p_count == s_count:
                result.append(i-p_len + 1)
        
        return result
    # Time Complexity: O(n)
    # Space Complexity: O(n+n) -> O(n)
    # Run Code Runtime: 44 ms
    # Submit Runtime: 104 ms, 34.28% faster
    # Submit Memory: 13.9 mb, 8.33% faster