class Solution:
    # Sol 1. Two Pointers
    def isPalindrome(self, s: str) -> bool:
        if not s:
            return True

        left = 0
        right = len(s) - 1
        
        s = s.lower()
        
        while left<right:
            while left<right and not s[left].isalnum():
                left += 1
            while left<right and not s[right].isalnum():
                right -= 1
                
            if left > right:
                return False
            
            elif left < right and s[left] != s[right]:
                return False
            
            left += 1
            right -= 1
            
        return True
    # Time Complexity: O(n/2) -> O(n), where n is the length of s
    # Space Complexity: O(1), no additional space
    # Run Code Runtime: 44ms
    # Submit Runtime: 44ms, 80.17% faster
    # Submit Memory: 14.4 mb, 33.33% less