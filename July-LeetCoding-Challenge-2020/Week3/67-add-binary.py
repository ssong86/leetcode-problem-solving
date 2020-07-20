class Solution:
    def addBinary(self, a: str, b: str) -> str:
        output = int(a,2) + int(b,2)
        
        return '{:b}'.format(output)
        # TC: O(n)
        # SC: O(n), string method makes extra space