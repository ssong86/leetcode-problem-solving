class Solution:
    # Sol 1. Using 3 pointers
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        ret = []
        nums.sort()  
        n = len(nums)

        for i in range(n-2): #left, right
            if i>0 and nums[i] == nums[i-1]: # remove duplicate in i
                continue 
                
            l = i+1
            r = n-1
            
            while l<r:
                total = nums[i] + nums[l] + nums[r]
                if total<0:
                    l += 1
                elif total>0:
                    r -= 1
                else:
                    ret.append([nums[i],nums[l],nums[r]]) 
                    while l<r and nums[l]==nums[l+1]: # remove duplicate in l
                        l += 1
                    while l<r and nums[r]==nums[r-1]: # remove duplicate in r
                        r -= 1             
                    l += 1
                    r -= 1
        return ret
        # Time Complexity: O(nlogn + n*n) = O(n^2)
        # Space Complexity: O(n), ret
        # Runtime Run Code: 48ms
        # Submit Runtime: 1092ms, 45.35% faster
        # Submit Space: 17.2mb, 22.86% faster