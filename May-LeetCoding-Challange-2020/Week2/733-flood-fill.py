class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:
        # Sol 1. Using Recursive Func
        current_color = image[sr][sc]
        if current_color == newColor:
            return image
        self.fill_helper(image, sr, sc, newColor, current_color)
        return image
        
    def fill_helper(self, f_image: List[List[int]], f_sr: int, f_sc: int, f_newColor: int, f_current_color: int):
        
        # undoable condition
        if (f_sr < 0 or f_sc < 0 or f_sr >= len(f_image) or f_sc >= len(f_image[0]) or f_current_color != f_image[f_sr][f_sc]):
            return
        
        f_image[f_sr][f_sc] = f_newColor
        self.fill_helper(f_image, f_sr+1, f_sc, f_newColor, f_current_color)
        self.fill_helper(f_image, f_sr-1, f_sc, f_newColor, f_current_color)
        self.fill_helper(f_image, f_sr, f_sc+1, f_newColor, f_current_color)
        self.fill_helper(f_image, f_sr, f_sc-1, f_newColor, f_current_color)
        
        # Time Complexity: O(n), n = # of pixels
        # Space Complexity: O(n), recursive function calls
        # Run Code Runtime: 32 ms
        # Submit Runtime: 76 ms, 79.99% faster
        # Submit Memory Usage: 13.9 MB, 5.56% less
        