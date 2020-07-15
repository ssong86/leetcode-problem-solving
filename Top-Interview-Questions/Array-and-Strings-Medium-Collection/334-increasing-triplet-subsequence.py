class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        if not nums or len(nums) < 3:
            return False
        
        second = float('inf')
        third = float('inf')
        for first in nums:
            if first <= second:
                second = first
            elif first <= third:
                third = first
            else:
                return True
            
        return False
        # TC: O(n)
        # SC: O(1)
        # Runtime: 80 ms, faster than 26.59% 
        # Memory Usage: 14.6 MB, less than 17.36% 