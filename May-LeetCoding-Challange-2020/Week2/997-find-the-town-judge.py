class Solution(object):
    # Sol 1. Array
    def findJudge(self, N, trust):
        """
        :type N: int
        :type trust: List[List[int]]
        :rtype: int
        """
        trust_score = [0]*N
        for t in trust:
            trust_score[t[0]-1] -= 1
            trust_score[t[1]-1] += 1
      
        for i in range(len(trust_score)):
            if trust_score[i] == N-1:
                return i+1
        return -1
    
        # Time Complexity: O(t+n)
        # Space Complexity: O(n)