class Solution:
    # Sol 2. 
    class Solution:
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
        # Space Complexity: O(n)
        # Run Code Runtime: 20 ms
        # Submit Runtime: 208ms, 38.82% faster
        # Submit Memory: 15mb, 8.70% faster

    # Sol 1. Using Dictionaries
    def findAnagrams(self, s: str, p: str) -> List[int]:
        result = []
        d1 = collections.Counter(p)
        window = s[:len(p)-1]
        d2 = collections.Counter(window)
        for start in range(len(s)-len(p)+1):
            end = start + len(p) - 1
            d2[s[end]] = d2.get(s[end], 0) +1
            
            if d1 == d2:
                result.append(start)
                
            d2[s[start]] -= 1
            if d2[s[start]] == 0:
                del d2[s[start]]
        
        return result

