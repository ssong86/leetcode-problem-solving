class MinStack:

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