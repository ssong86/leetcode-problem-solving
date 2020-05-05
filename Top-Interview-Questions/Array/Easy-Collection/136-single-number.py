class Solution:
    # Sol 1. List operation
    def singleNumber(self, nums: List[int]) -> int:
        new_list = []
        for i in nums:
            if i not in new_list:
                new_list.append(i)
            else:
                new_list.remove(i)
        return new_list.pop()
    # Time Complexity: O(n) 
    # Space complexity: O(n)

    # Sol 2. Math
    '''
    Each character can be duplicated up to 2 times.
    2*(a+b+c)-(a+a+b+b+c) = c
    '''
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return 2 * sum(set(nums)) - sum(nums)
    # Time Complexity = O(n+n) = O(n)
    # Space Complexity = O(n)

    # Sol 3. Bit Manipulation, consider this as binary numbers
    # XOR, in python 3, it is described as ^ operator
    # a xor a = 0, a xor 0 = a
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        a = 0
        for i in nums:
            a ^= i
        return a

    # Time Complexity: O(n)
    # Space Complexity: O(1)

    # Sol 4. Using Count
    class Solution:
        def singleNumber(self, nums: List[int]) -> int:
            for i in nums:
                if nums.count(i) == 1:
                    return i
    # Time Complexity: O(n)
    # Space Complexity: O(1)
