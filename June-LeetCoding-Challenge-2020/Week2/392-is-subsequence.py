class Solution:
    # Sol 1. Using Pointer
    def isSubsequence(self, s: str, t: str) -> bool:
        if s == "":
            return True
        
        ptr = 0
        for c in t:
            if s[ptr] == c:
                ptr += 1
                if ptr == len(s):
                    return True
        return False
    # TC: O(n), where n is length of t, best case n is the length of s
    # SC: O(1)
    # Runtime: 40 ms, faster than 60.80%
    # Memory Usage: 13.7 MB, less than 98.08%

    # Sol 2. Brute Force, Not working
    def isSubsequence(self, s:str, t:str) -> bool:
        if len(s)==0:
            return True
        elif len(t)==0:
            return False

        s_list = [char for char in s]
        t_list = [char for char in t]
        ret_list = []
        ret = False
        # not working because it compares un-ordered
        for s_c in s_list:
            for t_c in t_list:
                if s_c == t_c:
                    ret_list.append(t_c)
        print(s_list)
        print(t_list)
        print(ret_list)

        return ret_list == s_list