class Solution:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        n = len(people)
        people.sort() # sort ppl by height and k in ascending order
        return_list = [None]*n
        for height, index in people:
            i,j = 0, -1 # i is the index of return_list
                        # j is the index of the queue with the greater than or equal height
            while(i<n):
                if not return_list[i] or return_list[i][0] == height:
                    j += 1
                if j == index:
                    break
                i+=1
            return_list[i] = [height, index]

        return return_list
        # TC: O(n^2)
        # SC: O(n), where n is the number of ppl in queue
        # Runtime: 1120 ms, faster than 6.32%
        # Memory Usage: 14.3 MB, less than 24.17%