class Solution:
    # Sol 1. Using Bit shifting
    def countBits(self, num: int) -> List[int]:
        # 0: 0
        # 1: 1 // [0,1]
        # 2: 10 // [0,1,1]
        # 3: 11 // [0,1,1,2]
        # 4: 100 // [0,1,1,2,1]
        # 5: 101 // [0,1,1,2,1,2]
        if num == 0:
            return [0] # just making calculation faster, optional corner case 
        
        ret_list = [0] * (num+1) # dp array
        for i in range(len(ret_list)): # we need to access the last element of ret_array with len
            ret_list[i] = ret_list[i//2] + i%2
        # print(ret_list)
        return ret_list
    # TC: O(n+1) -> O(n) 
    # SC: O(n+1) -> O(n)
    # Runtime: 84 ms, faster than 75.93%
    # Memory: 20.6 MB, less than 5.00%