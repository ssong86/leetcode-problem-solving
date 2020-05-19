class Solution:
    # Sol 1. Hash Map
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        d={}
        for i,num in enumerate(nums):
            if target-num in d:
                return d[target-num], i
            d[num]=i # Store the index of num array to d
    # Time Complexity: O(n)
    # Space Complexity: O(n)
    # Run Code Runtime: 48ms
    # Submit Runtime: 100ms, 32.69% faster
    # Submit Memory: 15.2mb, 5.11% faster
        