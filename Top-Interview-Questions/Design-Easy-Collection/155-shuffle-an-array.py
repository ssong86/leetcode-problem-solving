class Solution:
    def __init__(self, nums: List[int]):
        self.mem = nums        

    def reset(self) -> List[int]:
        """
        Resets the array to its original configuration and return it.
        """
        print("reset func", self.mem)
        return self.mem[:]
        

    def shuffle(self) -> List[int]:
        """
        Returns a random shuffling of the array.
        """
        copy = self.mem[:]
        # print("shuffle before",copy)
        left, right = 0, len(copy)-1
        while left < right:
            idx = random.randint(left, right)
            copy[idx], copy[left] = copy[left], copy[idx]
            left += 1
        # print("shuffle after", copy)
        return copy[:]

# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
        # TC: O(n)
        # SC: O(n)
        # Runtime: 344 ms, faster than 54.70%
        # Memory Usage: 18.9 MB, less than 89.00%