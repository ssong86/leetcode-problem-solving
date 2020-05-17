class Solution:
    # Sol 1. Kadane's Algorithm
    def maxSubarraySumCircular(self, A: List[int]) -> int:
        K = self.Kadane(A)
        
        curr_sum = 0
        for i in range(len(A)):
            curr_sum += A[i]
            A[i] = -A[i]
        curr_sum = curr_sum + self.Kadane(A)
        
        if curr_sum > K and curr_sum != 0:
            return curr_sum
        else:
            return K
        
    def Kadane(self, nums):
        scope_max, global_max = nums[0], nums[0]
        for n in nums[1:]:
            scope_max = max(n, scope_max+n)
            global_max = max(scope_max, global_max)
            
        return global_max
    # Time Complexity: O(n)
    # Space Complexity: O(n)
    # Run Code Runtime: 24 ms
    # Submission Runtime: 1204 ms, faster than 5.12% 
    # Submission Memory: 17.9 MB, faster than 100% 
    