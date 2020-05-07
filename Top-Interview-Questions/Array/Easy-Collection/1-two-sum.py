class Solution:
    # Sol 1. Hash Map
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        d={}
        for i,num in enumerate(nums):
            if target-num in d:
                print(d)
                return d[target-num], i
            d[num]=i
    # Time Complexity: O(n)
    # Hash Map: O(n)
        