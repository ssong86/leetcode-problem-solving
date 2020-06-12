class Solution:
    # Sol 1. Merge intervals with 2 pointers
    def intervalIntersection(self, A: List[List[int]], B: List[List[int]]) -> List[List[int]]:
        a,b = 0, 0
        len_a, len_b = len(A), len(B)

        ret_list = []

        while(a < len_a and b < len_b):
            interval_start = max(A[a][0], B[b][0])
            interval_end = min(A[a][1], B[b][1])
            
            if interval_start <= interval_end:
                ret_list.append([interval_start, interval_end])
                
            if A[a][1] < B[b][1]:
                a += 1
            else:
                b += 1
        return ret_list
    # Time Complexity: O(m+n) -> O(n), where m is # of elements in A and n is # of elements in B respectively
    # Space Complexity: worst case: O(m+n-1) -> O(m+n), O(1) if we dont include the result