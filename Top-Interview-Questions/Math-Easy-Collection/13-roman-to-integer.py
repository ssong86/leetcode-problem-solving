class Solution:
    def romanToInt(self, s: str) -> int:
        symbol = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
        c = 0 # roman char index in string
        total_sum = 0 # return value
        
        """Rule
        1. if the following char is greater than previous, subtract
        2. repeat 2 every 2 chars 
        3. add up all other chars 
        """
        while c < len(s):  
            if c+1 < len(s) and symbol[s[c]] < symbol[s[c+1]]: # subtractive case, repeat every 2 chars
                total_sum = total_sum + symbol[s[c+1]] - symbol[s[c]]
                c += 2
            else:
                total_sum = total_sum + symbol[s[c]] # add up the first char and other chars except tor 
                                                 # subtractive case
                c += 1
                
        return total_sum
        
        # TC: O(1), the input is limited from 1 to 3999, but generally O(n), n is the length of the string
        # SC: O(1), the map size is only 7 cases.
        # Runtime: 40 ms, faster than 92.29%
        # Memory Usage: 13.9 MB, less than 26.91%