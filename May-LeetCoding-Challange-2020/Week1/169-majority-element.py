class Solution:
    # Sol 1. Hash Map
    def majorityElement(self, nums: List[int]) -> int:
        major_count = len(nums)//2
        c = collections.Counter(nums)
        for i in c: # i is the key of the hash map
            # print(i)
            if c[i] > major_count:
                return i
    # Time Complexity: O(n)
    # Space Complexity: O(n)

    # Sol 2. Brute Force