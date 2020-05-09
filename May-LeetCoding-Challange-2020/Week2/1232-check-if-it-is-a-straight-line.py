class Solution:
    # Sol 1. Brute Force Math
    def checkStraightLine(self, coordinates: List[List[int]]) -> bool:
        # print(coordinates[0])
        # delta = (yn-y0)/(xn-x0), fuck this
        # (y1-y0)/(x1-x0) = (yn-y0)/(xn-x0)
        x0,y0 = coordinates[0]
        x1,y1 = coordinates[1]
        for i in range(2,len(coordinates)):
            xn, yn = coordinates[i]
            if (y1-y0)*(xn-x0) == (yn-y0)*(x1-x0):
                return True
            else:
                return False
        # Time Complexity: O(n)
        # Space Complexity: O(1)