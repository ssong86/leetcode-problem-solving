class Solution:
    def twoCitySchedCost(self, costs: List[List[int]]) -> int:
        costs.sort(key=lambda x: x[0]-x[1])
        # print(costs)
        total = 0
        n = len(costs)//2 # we send ppl/2 exactly to each city
        
        for i in range(n):
            total += costs[i][0] + costs[i+n][1]
            
        return total
    # TC: O(nlogn) + O(n) = O(nlogn), where sort() takes O(nlogn)
    # SC: O(1) 
    # Runtime: 44 ms, faster than 49.91%
    # Memory: 14.1 MB, less than 7.69%