class Solution:
    # Sol 1. Using HashMap
    def frequencySort(self, s: str) -> str:
        # edge case
        if not s:
            return s
        c = Counter(list(s))
        c_list = sorted(c, key=lambda x:c[x], reverse=True)
        
        output = []
        for char in c_list:
            output.append(char*c[char])
        
        return "".join(output)
    
    # Time Complexity: O(n) + O(nlogn) = O(nlogn)
    # Space Complexity: O(n)
    # Run Code Runtime: 44 ms
    # Submit Runtime: 44 ms, 64.02% faster
    # Submit Memory: 15.7 mb, 7.14% less 