class Solution:
    # Sol 1. Brute Force
    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
        if len(nums) == 0:
               return []
        nums.sort()
        result = [[num] for num in nums]
        for i in range(len(nums)):
               for j in range(i):
                if nums[i]%nums[j] == 0 and len(result[i]) < len(result[j]) + 1:
                    result[i] = result[j] + [nums[i]]
                    
        return max(result, key = len)

    # TC: O(nlogn + n + n^2) => O(n), where n is # numbers in nums
    # SC: O(n)
    # Runtime: 540 ms, faster than 25.49% 
    # Memory Usage: 13.8 MB, less than 85.08%