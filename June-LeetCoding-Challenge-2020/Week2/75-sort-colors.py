class Solution:
    # Sol 1. Using Pointers
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        red = 0
        white = 0
        blue = len(nums)-1
        # output: [red, white, blue]
        # red is always left, blue is always right, white is moving in the middle
        while white <= blue:
            if nums[white] == 0: # if we find 0, red, swap with 
                nums[red], nums[white] = nums[white], nums[red]
                red += 1
                white += 1
            elif nums[white] == 1:
                white += 1
            elif nums[white] == 2:
                nums[white], nums[blue] = nums[blue], nums[white]
                blue -=1
        # TC: O(n)
        # SC: O(1)

    # Sol 2. Bucket Sort, n-space memory
    def sortColors(self, nums: List[int]) -> None:
        count = Counter (nums)

        for i in range(len(nums)):
            if count[0] >0:
                nums[i] = 0
                count[0] -= 1
            elif count[1] > 0:
                nums[i] = 1
                count[1] -= 1
            elif count[2] > 0:
                nums[i] = 2
                count[2] -= 1
    # TC: O(n), n is the number of nums
    # SC: O(n)

    # Sol 3. Brute Force
    # Increment each counter for colors
    # Declare an array and append it with colors (0,1,2) and counters :)