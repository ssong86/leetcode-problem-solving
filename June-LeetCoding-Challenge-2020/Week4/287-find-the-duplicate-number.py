class Solution:
    # Sol 1. Two Pointers
    def findDuplicate(self, nums: List[int]) -> int:
        comp1 = comp2 = nums[0]
        
        comp1 = nums[comp1]
        comp2 = nums[nums[comp2]]
        
        while comp1 != comp2:
            comp1 = nums[comp1]
            comp2 = nums[nums[comp2]]
        
        comp3 = nums[0]
        comp4 = comp1
        
        while comp3 != comp4:
            comp3 = nums[comp3]
            comp4 = nums[comp4]
            
        return comp3
        # TC: O(N)
        # SC: O(N)

    # Sol 2. Two Pointers 2
    def findDuplicate(self, nums):
        beg, end = 1, len(nums)-1
        
        while beg + 1 <= end:
            mid = (beg + end)//2
            count = sum([num <= mid for num in nums])
            if count <= mid:
                beg = mid + 1
            else:
                end = mid
        return end
