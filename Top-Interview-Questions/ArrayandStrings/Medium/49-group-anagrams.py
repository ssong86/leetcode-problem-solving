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
    # TC: O(n), where n is the number of items in strs
    # SC: O(n) + O(n) -> O(n)
    # Runtime: 100 ms, faster than 83.41% 
    # Memory: 16.6 MB, less than 81.83%