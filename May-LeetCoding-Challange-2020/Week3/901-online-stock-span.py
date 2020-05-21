class StockSpanner:
    # Sol 1. Using Stack
    def __init__(self):
        self.stack = []        

    def next(self, price: int) -> int:
        span = 1
        while self.stack and self.stack[-1][0] <= price:
            span = span + self.stack.pop()[1]
        self.stack.append((price, span))
        return span
    # Time Complexity: O(n)
    # Space Complexity: O(n)
    # Run Code Runtime: 36 ms
    # Submit Runtime: 736 ms, 8.09% faster
    # Submit Memory: 18.5 mb, 100% less

# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner()
# param_1 = obj.next(price)
