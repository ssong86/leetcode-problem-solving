class Solution:
    def hammingWeight(self, n: int) -> int:
        one_count = 0
        mask = 1 
        
        for _ in range(32):
            if n & mask != 0:       
                one_count += 1
            mask = mask << 1
            
        return one_count
    # TC: O(1)
    # SC: O(1)