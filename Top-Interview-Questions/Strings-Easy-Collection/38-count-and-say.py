class Solution:
    def countAndSay(self, n: int) -> str:
        if n==1:
            return "1"
        
        prev = self.countAndSay(n-1)
        ret = ""
        count = 1
        for i in range(len(prev)):
            if i == len(prev)-1 or prev[i] != prev[i+1]: # we cannot compare the last element
                ret = ret+str(count) + prev[i] # same as ret += str(count) + prev[i]
                count = 1 # reset to 1 to find other numbers' counts
            else:
                count += 1
        return ret
        # let's find the rule of each number
        # 1: 1
        # 2: 11, one of element 1
        # 3: 21, two of element 1
        # 4: 1211, one of element 2, one of element one
        # So, it basically sees the previous number to find the pattern
        # 5: 111221, one of element 1, one of element 2, two of element 1
        # 6: 312211, three of element 1, two of element 2, one of element 1
        # 7: 13112221, ...

        # TC: O(n), O(1) if we say 1<=n<=30
        # SC: O(n), string slicing, O(1) if we say 1<=n<=30
        # Runtime: 20 ms, faster than 99.95%
        # Memory: 13.9 MB, less than 6.38% 