class Solution:
    def angleClock(self, hour: int, minutes: int) -> float:
        # circle angle = 360 degree
        # min = 6 degree/min
        # hour = 30 degree/hour
        # 1 hour = 60 min, 0.5 degree/min
        
        h_degree = 0.5*(hour*60 + minutes)
    
        m_degree = 6*(minutes)

        total_degree = abs(h_degree-m_degree)

        return min(total_degree, abs(total_degree-360))

        # TC: O(1)
        # SC: O(1)
        # Runtime: 28 ms, faster than 76.63%
        # Memory Usage: 13.8 MB, less than 52.56%