class Solution:
    # Sol 1. Two pointers
    def searchInsert(self, nums: List[int], target: int) -> int:
        if len(nums) == 0:
            return 0
        left_bound = 0
        right_bound = len(nums) -1
        ptr = 0
        while left_bound <= right_bound:
            ptr = (left_bound+right_bound)//2
            if nums[ptr] == target:
                return ptr
            elif nums[ptr] < target:
                left_bound = ptr + 1
            else:
                right_bound = ptr - 1
        return left_bound 
    # TC: O(logn),n is the length of nums.
    # SC: O(1).