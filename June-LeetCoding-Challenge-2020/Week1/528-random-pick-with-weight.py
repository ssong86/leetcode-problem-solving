class Solution:
    def __init__(self, w: List[int]):
        self.part_weight = []
        total = 0
        for weight in w:
            total += weight
            self.part_weight.append(total)
        self.total_weight = total

    def pickIndex(self) -> int:
        ran = random.randint(1,self.total_weight)
        for index, weight in enumerate(self.part_weight):
            if ran <= weight:
                return index

# Your Solution object will be instantiated and called as such:
# obj = Solution(w)
# param_1 = obj.pickIndex()
    # TC: O(n)
    # SC: O(n)
    # Runtime: 5760 ms, faster than 8.55%, might need to work
    # Memory Usage: 18.3 MB, less than 50.86%