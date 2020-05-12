class Solution(object):
    # Sol 1. Quick Sort
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        i = 0 # 0 - n-1
        j = 0 # 0 - n-1
        while i < len(nums):
            if nums[i] != 0:
                nums[i], nums[j] = nums[j], nums[i]
                j += 1
            i += 1
        # Time Complexity: O(n) 
        # Space Complexity: O(1)
    
    # Sol 2. Brute Force
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        count_zeroes = 0
        while 0 in nums:
            nums.remove(0)
            count_zeroes += 1
        
        for i in range(count_zeroes):
            nums.append(0)
        # Time Complexity: O(n)
        # Space Complexity: O(1)
        
   
    # Sol 3. Revision of Sol 2
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        n = len(nums) # len is in-place, so if you update in the loop, this can be affected
        for i in xrange(n):
            if nums[i] == 0:
                nums.remove(nums[i])
                nums.append(0)
            else:
                continue
        # Time Complexity: O(n)
        # Space Complexity: O(1)
        

