class Solution:
    # Sol 1. One Pointer
    def arrangeCoins(self, n: int) -> int:
        stair_count = 1
        while stair_count <= n:
            n, stair_count = n-stair_count, stair_count+1
            # print(stair_count)
        return stair_count-1
    # TC: O(n)
    # SC: O(1)
    # Runtime: 904 ms, faster than 40.41%
    # Memory Usage: 13.6 MB, less than 96.42%
    
    # Sol 2. Math
    def arrangeCoins(self, n: int) -> int:
        return abs(math.floor(math.sqrt(2*n+0.25) - 0.5))
    # TC: O(1)
    # SC: O(1)
    # Runtime: 32 ms, faster than 86.95%
    # Memory Usage: 14 MB, less than 14.92%

    # Sol 3. Binary Search
    def arrangeCoins(self, n: int) -> int:
        # # coins = k*(k+1)//2
        l, r = 0, n
        
        while l<=r:
            mid = (l+r)//2
            coins = ((mid)*(mid+1))//2
            if coins == n:
                return mid
            elif coins > n:
                r = mid - 1
            else:
                l = mid + 1
        return r # maxmize the # stairs
    # TC: O(logn)
    # SC: O(1)
    # Runtime: 36 ms, faster than 75.73%
    # Memory Usage: 13.6 MB, less than 98.64%
