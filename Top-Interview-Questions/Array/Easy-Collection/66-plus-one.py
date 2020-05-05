class Solution:
    # Sol 1. Brute Force
    def plusOne(self, digits: List[int]) -> List[int]:
        n = len(digits)
        
        # move along the input array starting from the end
        for i in range(n):
            idx = n - 1 - i
            print(idx)
            # set all the nines at the end of array to zeros
            if digits[idx] == 9:
                digits[idx] = 0
            # here we have the rightmost not-nine
            else:
                # increase this rightmost not-nine by 1 
                digits[idx] += 1
                # and the job is done
                return digits
                
        # we're here because all the digits are nines
        return [1] + digits
    
    # Time Complexity: O(n)
    # Space Complexity: O(1) for if-else, O(n) for [1]+digits