class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        a, b = 0, 0 
        for i in nums:
            b = b ^ (a & i)
            a = a ^ i
            not_three = ~(a & b)
            a, b = not_three&a, not_three&b
        #print(a)
        #print(b)
        return a
    # TC: O(N)
    # SC: O(1)
    # Runtime: 64 ms, faster than 35.19%
    # Memory Usage: 15.5 MB, less than 42.02%