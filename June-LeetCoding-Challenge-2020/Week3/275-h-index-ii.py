class Solution:
    def hIndex(self, citations: List[int]) -> int:
        if not citations:
            return 0

        n = len(citations)
        left = 0
        right = n-1
        
        while left<right: # left <= right 
            mid = (left+right)//2
            if citations[mid] >= n-mid:
                right = mid # mid - 1
            else:
                left = mid+1
        if citations[left] == 0: return 0 # [0], dont need it with comments
        return n-left
    # TC: O(logn)
    # SC: O(1)
    # Runtime: 148 ms, faster than 76.96%
    # Memory Usage: 20.5 MB, less than 30.10%
