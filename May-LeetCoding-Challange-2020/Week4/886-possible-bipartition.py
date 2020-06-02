class Solution:
    def possibleBipartition(self, N: int, dislikes: List[List[int]]) -> bool:
        d = defaultdict(list)
        for a, b in dislikes:
            d[a].append(b)
            #print(d[a])
            d[b].append(a)
            #print(d[b])
            #print()
        
        group = {i:None for i in range(1,N+1) } # look up dictionary
        # print(group)
        
        def dfs(node, g):
            if not group[node]: # if we wanna mark it
                group[node] = g
            else:
                return group[node] == g # 
            for k in d[node]:
                if not dfs(k, 2 if g == 1 else 1 ): # not marked
                    return False 
            return True
        
        for n in range(1, N+1):
            if not group[n] and not dfs(n,1):
                return False
            
        return True