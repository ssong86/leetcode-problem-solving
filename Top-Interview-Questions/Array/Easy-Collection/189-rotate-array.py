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
    # Reason: Edge case of the list size, 536,870,91. If the list has the same
    # size of the max-size, it cannot exchange the element, head and tail.
    # 

    # Sol 2. Brute Force 2
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        # Base Case updated
        if (len(nums)==1 or len(nums)==0):
            return False

        k = k % len(nums)
        
        nums[:k], nums[k:] = nums[len(nums)-k:], nums[:len(nums)-k]
    # Time Complexity: O(n)
    # Space Complexity: O(1)     

