class Solution:
    def prisonAfterNDays(self, cells: List[int], N: int) -> List[int]:
        count = N%14
        if count == 0:
            count = 14
        
        while count:
            day_cells=[]
            day_cells.append(0) # after day 1, the first and last element should be 0

            for i in range(1,len(cells)-1):
                if cells[i-1]==cells[i+1]:
                    day_cells.append(1)
                else:
                    day_cells.append(0)
                    
            day_cells.append(0)
            cells = day_cells
            count -= 1
        
        return cells
    # TC: O(1), while loop max 13 times, for loop runs 6 6 times
    # SC: O(1)