class Solution(object):
    # Sol 1. Brute Force
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: None Do not return anything, modify nums in-place instead.
        """
     
        for i in range(k):
            prev = nums[-1]
            for j in range(len(nums)):
                nums[j], prev = prev, nums[j]
    # Time Complexity: O(k x n) -> O(n)
    # Space Complexity: O(1)
    # Working, but not accepted, time limite exceeded issue

