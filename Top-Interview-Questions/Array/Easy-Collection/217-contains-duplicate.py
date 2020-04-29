from collections import defaultdict
class Solution:
    # Sol 1
    def containsDuplicate(self, nums: List[int]) -> bool:
        m = defaultdict(int)
        for num in nums:
            if m[num]:
                return True
            m[num]+=1
        return False
    # Time Complexity: O(n)
    # Space Complexity: O(n), used a map, same memory as the array