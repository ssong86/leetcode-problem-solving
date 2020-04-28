class Solution(object):
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

# Brute Force
# Time Complexity: O(k x n) -> O(b)
# Space Complexity: O(1)