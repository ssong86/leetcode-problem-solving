class Solution(object):
    # Sol 1. Using Serial Number, Series
    # 1, 4, 9, 16, 25,....
    # 1, 1+3, 1+3+5, 1+3+5+7, 1+3+5+7+9, ...
    def isPerfectSquare(self, num):
        """
        :type num: int
        :rtype: bool
        """
        if num == 0:
            return False

        a0 = 1
        an = 0
        while an < num:
            an += a0
            if an == num:
                return True
            a0 += 2
        return False
        
        # Time Complexity: O(n)
        # Space Complexity: O(1)

    # Sol 2. 
    def isPerfectSquare(self, num):
        """
        :type num: int
        :rtype: bool
        """
        n = num ** (0.5)

        return n.is_integer()

        # Time Complexity: O(1)
        # Space Complexity: O(1)