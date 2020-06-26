class Solution:
    # Sol 1. Catalan Number
    def numTrees(self, n: int) -> int:
        if n is 0:
            return 0
        elif n is 1:
            return 1
        return self.catalan_number(n)
 
    def catalan_number(self, c:int) -> int:
        if c<=1:
            return 1
        re = 0
        re = math.factorial(2*c)//(math.factorial(c+1)*math.factorial(c))
        return re
    
    # TC: O(n)
    # SC: O(1)
    # Runtime: 32 ms, faster than 47.87% 
    # Memory Usage: 13.9 MB, less than 38.13% 

    # Sol 2. divide and conquer
    def numTrees(self, n: int) -> int:
        if n == 0:
            return 0
        elif n == 1:
            return 1  
        mem = {}  # memoization
        def d_c(start,end): # divide and conquer
            if start<1 or end>n or start>=end:
                return 1
            count = 0
            if (start, end) in mem:
                return mem[(start, end)]
            else:
                for i in range(start, end+1):
                    count += d_c(start, i-1)*d_c(i+1, end)
                mem[(start,end)] = count
            return count
        
        return d_c(1,n) 
    # TC: O(n*h), n is number of nodes, h is depth of each tree, worst case n^2
    # SC: O(n), map m is declared in the scope
    # Runtime: 28 ms, faster than 76.04%
    # Memory Usage: 13.8 MB, less than 50.56%  

