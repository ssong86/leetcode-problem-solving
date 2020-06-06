class Solution:
    # Sol 1. Using dictionary
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        dic = {}
        for word in strs:
            sortedword = "".join(sorted(word))
            print(sortedword)
            if sortedword not in dic:
                dic[sortedword] = [word]
            else:
                dic[sortedword].append(word)
            
       # print(dic)
        result = []
        for item in dic.values():
            result.append(item)
        return result
        # or simply return dic.values() there is difference in terms of order of each element
    # TC: O(n), where n is the number of items in strs, worst: O(n*mlogm), where m is the number of charaters of the string
    # SC: O(n) + O(n) -> O(n)
    # Runtime: 100 ms, faster than 83.41% 
    # Memory: 16.6 MB, less than 81.83%