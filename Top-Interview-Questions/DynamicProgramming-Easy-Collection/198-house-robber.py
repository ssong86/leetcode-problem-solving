class Solution:
    # Sol 1. DP
    def rob(self, nums: List[int]) -> int:
        if nums is None or len(nums) == 0:
            return 0
        if len(nums) == 1:
            return nums[0]

        dp = [nums[0], max(nums[0], nums[1])]
        # print(dp)
        for i in range(2, len(nums)):
            dp.append(max(dp[i -2] + nums[i], dp[i - 1]))
            print(dp)

        return dp[-1]
        # TC: O(n)
        # SC: O(n)

    # Sol 2. Using Two Sum Vars
    def rob(self, nums: List[int]) -> int:
        even_sum, odd_sum = 0,0
        
        for i in range(len(nums)):
            # print("num",nums[i])
            if i%2 == 1:
                odd_sum = max(odd_sum+nums[i], even_sum)
                # print("odd",odd_sum)
            else:
                even_sum = max(odd_sum, even_sum+nums[i])
                # print("even",even_sum)
        return max(odd_sum, even_sum)
        # TC: O(n) -> O(n^2), pop provides n time complexity
        # SC: O(1)
