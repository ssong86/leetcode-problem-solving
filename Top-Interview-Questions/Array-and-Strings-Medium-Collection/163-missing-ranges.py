class Solution:
    def findMissingRanges(self, nums: List[int], lower: int, upper: int) -> List[str]:
        # str()+"->"+str()
        # append
        # range varies from lower+1 to n-1
        check = None
        result = []
        for num in nums+[upper+1]:
            if num == check:
                continue
            if num != lower:
                if num == lower+1:
                    result.append(str(lower))
                else:
                    result.append(str(lower)+"->"+str(num-1))
                    
            lower = num + 1
            check = num
        
        return result

        # TC: O(n)
        # SC: O(n)
        # Runtime: 36 ms, faster than 28.63%
        # Memory Usage: 14 MB, less than 15.48%