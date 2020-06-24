class MinStack:
    # Sol 1. I don't know why this is working
    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stack = []
    # pop top get min with non-empty stacks
    def push(self, x: int) -> None:
        self.stack.append(x)        

    def pop(self) -> None:
        self.stack.pop()

    def top(self) -> int:
        top_stack = self.stack[-1]
        return top_stack

    def getMin(self) -> int:
        get_min = min(self.stack[:])
        return get_min
# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
    # TC: O(n), where n is the number of elements in the stack
    # SC: O(n), same

    # Sol 2. Using a map in the stack
    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stack = []
    # pop top get min with non-empty stacks
    def push(self, x: int) -> None:
        min_so_far = 0
        if self.stack:
            min_so_far = min(x, self.stack[-1][1])
        else:
            min_so_far = x
        self.stack.append((x, min_so_far))        

    def pop(self) -> None:
        self.stack.pop()

    def top(self) -> int:
        return self.stack[-1][0]

    def getMin(self) -> int:
        return self.stack[-1][1]
    # TC: O(1)
    # SC: O(n)
    # Runtime: 64 ms, faster than 69.29%
    # Memory Usage: 17.9 MB, less than 30.01%
