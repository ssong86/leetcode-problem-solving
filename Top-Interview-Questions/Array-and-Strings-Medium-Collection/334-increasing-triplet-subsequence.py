class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        flag = False
        second = float('inf')
        third = float('inf')
        for first in nums:
            if first <= second:
                second = first
            elif first <= third:
                third = first
            else:
                flag = True
                return flag
            
        return flag
        # TC: O(n)
        # SC: O(1)
        # Runtime: 80 ms, faster than 26.59% 
        # Memory Usage: 14.6 MB, less than 17.36% 