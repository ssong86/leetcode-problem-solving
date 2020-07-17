class Solution:
    # Sol 1. Built-in
    def reverseWords(self, s: str) -> str:
        return " ".join(reversed(s.split()))

    # TC: O(n), split runs n words in the string
    # SC: O(n), split provides n words space

    # Sol 2. Using two pointers
    def reverseWords(self, s: str) -> str:
        result,i,n = '' , 0 , len(s)
        while i<n:
            while i<n and s[i] == ' ':
                i+=1
            if i >= n: 
                break
            j=i+1
            while j<n and s[j] !=' ': 
                j+=1
                
            substring = s[i:j]
            if len(result) == 0: 
                result = substring
            else: 
                result = substring + ' ' + result
            i = j+1
        return result
    # TC: O(n)
    # SC: O(n)