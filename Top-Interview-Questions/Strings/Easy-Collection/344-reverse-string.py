class Solution:
    # Sol 1. Reverse built-in func
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        s.reverse()
    # Time Complexity: O(n), where n is the length of the list
    # Space Complexity: O(1)
    # Runtime Run Code: 28 ms
    # Submit Runtime: 360 ms, 7.17% faster
    # Submit Memory: 18.3 MB, 5.81% less

    # Sol 2. Swapping using two pointers
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        # Edge Case
        if len(s)<=1:
            return
        
        left_pointer = 0
        right_pointer = len(s) - 1
        while left_pointer < right_pointer:
            s[left_pointer], s[right_pointer ] = s[right_pointer], s[left_pointer] # Swapping
            left_pointer += 1
            right_pointer -= 1
    # Time Complexity: O(n)
    # Space Complexity: O(1)
    # Runtime Run Code: 40 ms
    # Submit Runtime: 372 ms, 6.34% faster
    # Submit Memory: 18.3 mb, 5.81% less

    # Sol 3. Even faster
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        # Both working
        # n = len(s)
        # for i in range(int(n/2)):
        #     tmp = s[i]
        #     s[i] = s[n-1-i]
        #     s[n-1-i] = tmp
        s[::] = s[::-1]
