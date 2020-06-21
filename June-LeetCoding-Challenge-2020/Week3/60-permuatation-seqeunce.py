class Solution:
    # Sol 1. Array
    def getPermutation(self, n: int, k: int) -> str:
        nums = [str(i) for i in range(1,n+1)]
        output = []
        factorial = self.get_factorial(n) # can use math.factorial(n)
        
        index = k-1
        while nums:
            factorial = factorial // len(nums) # previous factorial
            print("f",factorial)
            position = index // factorial
            print("p",position)
            number = nums.pop(position)
            output.append(number)
            index = index % factorial
            
        return "".join(output)
    
    def get_factorial(self, n:int):
        fact_num = 1
        for i in range(1,n+1):
            fact_num = fact_num * i 
        return fact_num
    # TC: O(n)
    # SC: O(n)