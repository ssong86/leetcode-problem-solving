// Time Complexity: O(n+m) has to go through A and B all the way
// Space Complexity: O(n+m) if A and B are equal
// Runtime: 60 ms, faster than 93.71%
// Memory Usage: 18.8 MB, less than 8.00%

// Best Case == Worst Case
class Solution {
public:
    vector<vector<int>> intervalIntersection(vector<vector<int>>& A, vector<vector<int>>& B) {
        int start, end;
        int i = 0, j = 0;
        vector<vector<int>> result;
        
        while(i < A.size() && j < B.size()){
            start = max(A[i][0], B[j][0]);
            end = min(A[i][1], B[j][1]);
            
            if(start <= end)
                result.push_back({start, end});
            
            if(B[j][1] > A[i][1]){
                i++;
            }else{
                j++;
            }
        }
        
        return result;
    }
};