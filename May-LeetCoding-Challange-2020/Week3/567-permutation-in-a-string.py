class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False
        
        s1_len=len(s1)
        # Edge case
        if s1_len == 0:
            return True

        s1_counter = Counter(s1)
        s2_counter = Counter()
        
        for index, char in enumerate(s2):
            s2_counter[char] += 1       
            if index >= s1_len:
                del_element_s2 = s2[index - s1_len]
                
                if s2_counter[del_element_s2] == 1:
                    del s2_counter[del_element_s2]
                else:
                    s2_counter[del_element_s2] -= 1
                    
            if s2_counter == s1_counter:
                return True
            else:
                continue
        
        return False
    # Time Complexity: O(n)
    # Space Complexity: O(n+n) -> O(n)
    # Run Code Runtime: 44 ms
    # Submit Runtime: 104 ms, 34.28% faster
    # Submit Memory: 13.9 mb, 8.33% faster