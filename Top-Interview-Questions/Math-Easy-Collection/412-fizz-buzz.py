class Solution:
    # Sol 1. Brute Force
    def fizzBuzz(self, n: int) -> List[str]:
        ret_l = []
        
        for i in range(n):
            if (i+1)%3 == 0 and (i+1)%5==0:
                ret_l.append("FizzBuzz")
            elif (i+1)%3 == 0:
                ret_l.append("Fizz")
            elif (i+1)%5 == 0:
                ret_l.append("Buzz")
            else:
                ret_l.append(str(i+1))
                
        return ret_l
    # TC: O(n)
    # SC: O(n)
    # Runtime: 44 ms, faster than 58.65% 
    # Memory Usage: 14.9 MB, less than 38.48%