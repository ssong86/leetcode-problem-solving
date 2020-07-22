class Solution {
    map<int, int> numToCount;
    map<int, vector<int>> countToNum;
    priority_queue<int> pq;
    set<int> counts;
    
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        
        if(!nums.size())
            return {};
        if(nums.size() == 1)
            return {nums[0]};
        
        storeCountByNumbers(nums);
        storeNumberByCounts();
                    
        return getKMostFrequentNumbers(k);
    }
    
    void storeCountByNumbers(vector<int> nums){
        for(int n : nums)
            numToCount[n]++;
    }
    
    void storeNumberByCounts(){
        for(auto m : numToCount){
            countToNum[m.second].push_back(m.first);
            
            if(!counts.count(m.second)){
                counts.insert(m.second);
                pq.push(m.second);
            }
        }
    }
    
    vector<int> getKMostFrequentNumbers(int k){
        vector<int> res;
        
        while(k > 0){
            int count = pq.top();
            pq.pop();
        
            for(int n : countToNum[count]){
                res.push_back(n);
                k--;
            }
        }
        
        return res;
    }
    
};