# The isBadVersion API is already defined for you.
# @param version, an integer
# @return a bool
# def isBadVersion(version):

class Solution:
    # Sol 1. Linear Search
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        for i in range(n):
            if(isBadVersion(i)):
                return i
        return n
        # Time Complexity: O(n)
        # Space Complexity: O(1)
        # Working, Not accepted, time-limit exceeded

    # Sol 2. Binary Search Tree
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        left = 1 
        right = n
        
        while(left<right):
            mid = left+(right-left)//2 # In Python 3, / returns floating-point and // returns integer 
            
            if not isBadVersion(mid):
                left = mid + 1
            else: 
                right = mid
        
        return left
        # Time Complexity: O(log(n))
        # Space Complexity: O(1)
