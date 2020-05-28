class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        if len(nums) <=1 :
            return 0
        
        store_index = {}
        max_len, cum_sum = 0, 0
        
        for i in range(len(nums)):
            if nums[i] == 0:
                cum_sum -= 1
            else: # nums[i] == 1
                cum_sum += 1
                
            # if cum_sum == 0, store the index to max_len up to this point
            # check store_index with index - earlist index
            # look up store_index         
            if cum_sum == 0:
                max_len = i+1 
            elif cum_sum in store_index: # finding element in Maps takes O(1), very good
                max_len = max(max_len, i-store_index[cum_sum]) 
            else:
                store_index[cum_sum] = i
            
        return max_len
        # TC: O(n), where n is the length of nums
        # SC: O(n), we store the index value into a dictionary
        # Runtime: 932 ms, faster than 40.44%
        # Memory: 18.3 MB, less than 16.67%