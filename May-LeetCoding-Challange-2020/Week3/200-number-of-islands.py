class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid:
            return 0
        
        count = 0
        
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == '1':
                    self.dfs(grid, i, j)
                    count = count + 1
        return count
    
    def dfs(self, grid, i, j):
        if i<0 or j<0 or i>=len(grid) or j>= len(grid[0]) or grid[i][j] != '1':
            return
        
        grid[i][j] = '0'
        self.dfs(grid, i+1, j)
        self.dfs(grid, i-1, j)
        self.dfs(grid, i, j+1)
        self.dfs(grid, i, j-1)

    # Time Complexity: O(m*n) => O(n^2)
    # Space Complexity: O(m*n), where the map is filled with all lands
    # Run Code Runtime: 44 ms
    # Submit Runtime: 152 ms, 51% faster
    # Submit Memory: 9.40% less