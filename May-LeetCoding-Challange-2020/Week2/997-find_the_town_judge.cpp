class Solution {
public:

    /* Time Complexity: O(n + N + N) = O(n + N)
     * Space Complexity: O(n + N) = O(n + N)
    */
    int findJudge(int N, vector<vector<int>>& trust) {
        
        if(N == 1)
            return 1;
        
        map<int, vector<int>> trust_map;
        int n = trust.size();
        int judge = -1;
        
        for(int i = 0; i < n; i++){
        
            trust_map[trust[i][0]].push_back(trust[i][1]);
        }
        
        for(int j = 1; j <= N; j++){
            
            if(!trust_map[j].size()){
                judge = j;
            }
        }
        
        if(judge == -1)
            return -1;
               
        for(int k = 1; k <= N; k++){
            
            if(k != judge){
                if(!(count(trust_map[k].begin(), trust_map[k].end(), judge))){
                    return -1;
                }
            }
        }
        
        return judge;
        
    }
};