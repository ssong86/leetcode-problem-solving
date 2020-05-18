class Solution:
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