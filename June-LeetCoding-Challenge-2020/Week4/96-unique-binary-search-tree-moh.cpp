class Solution {
public:
    int numTrees(int n) {
        int dp[n + 1];
        fill_n(dp, n + 1, 0);   //initialize array
        
        dp[0] = 1;
        dp[1] = 1;
        

        for(int i = 2; i <= n; i++){
            for(int j = 1; j <= i; j++){
                dp[i] = dp[i] + (dp[i-j] * dp[j-1]); //n - i in right * i - 1 in left ???? couldn't understand
            }
        }
        return dp[n];
    }
};

//TC = O(i) * O(n-i) = O(i^2)?
//SC = O(n) assigned n + 1 length array