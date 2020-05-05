class Solution:
    # Sol 1. XOR Bit Manipulation
    def findComplement(self, num: int) -> int:
        # Base case
        if num == 0:
            return 1
        
        # ex) 5 = 101, 1 = 001
        # 101 XOR 001 = 100 | 101
        # 100 XOR 010 = 110 | 010
        # 110 XOR 100 = 010 | 001
        #                   | 000
        loop_controller = num
        bit_mask = 1
        while loop_controller:
            # flip current bit
            # XOR
            num = num ^ bit_mask
            bit_mask = bit_mask << 1
            loop_controller = loop_controller >> 1
        return num
    # Time Complexity: O(1)
    # Space Complexity: O(1)